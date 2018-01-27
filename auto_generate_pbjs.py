#!/usr/bin/python
# -*- coding: UTF-8 -*-

"""
@version: ??
@author: xiaoming
@license: MIT Licence 
@contact: xiaominghe2014@gmail.com
@site: 
@software: PyCharm
@file: auto_generate_pbjs.py
@time: 2018/1/26 下午2:18

"""
# 1. 执行 pbjs -t static-module -w commonjs -o js/proto.js proto/*.proto
# 2. 读取proto包名创建js id，对应proto里面的message
# 3. 写buffer文件
import os
import re


current_dir = os.path.dirname(os.path.realpath(__file__))
proto_path = '{}/proto/'.format(current_dir)
js_path = '{}/js/'.format(current_dir)
current_id = 2000
proto_msg_all = []


def main():
    os.system('pbjs -t static-module -w commonjs -o {0}/js/proto.js {0}/proto/*.proto'.format(current_dir))
    for root, dirs, files in os.walk(proto_path):
        for f in files:
            url = '{}{}'.format(root, f)
            if os.path.isfile(url) and os.path.splitext(f)[1] == '.proto':
                msg = get_proto_msg(url)
                set_id(msg)
    set_buffer()


def get_proto_msg(proto_url):
    print(proto_url)
    with open(proto_url, 'r', encoding='utf-8') as txt:
        proto = txt.read()
        pkg = re.search(r'package\s*(.*?)\s*;', proto).group(1)
        msg = re.findall(r'message\s*(.*?)\s*{', proto)
        return {
            'pkg': pkg.replace('.', '_'),
            'msg': msg
        }


def set_id(proto_msg):
    print(proto_msg)
    global proto_msg_all
    proto_msg_all.append(proto_msg)
    with open('{}/{}.js'.format(js_path, proto_msg['pkg']), 'w+') as js:
        js.write('\n\n"use strict";\n\n')
        global current_id
        js_id = current_id
        js.write('const start_id = {}\n'.format(js_id))
        index = 1
        js.write('const protoId = { \n')
        for msg in proto_msg['msg']:
            js.write('\t{}:start_id+{},\n'.format(msg, index))
            index += 1
            current_id += 1
        js.write('} \n')
        js.write('module.exports = protoId \n')
        js.close()


def set_buffer():
    js_url = '{}/bufferUtils.js'.format(js_path)
    with open(js_url, 'w+') as js:
        global proto_msg_all
        js.write('\n\n"use strict";\n\n')
        js.write('const protos = require(\'./{}\')\n'.format('proto'))
        js.write('var protoIds = { \n')
        for msg in proto_msg_all:
            js.write('\t {0}:require(\'./{0}\'), \n'.format(msg['pkg']))
        js.write('} \n\n\n')
        js.write('const findMessage = function(cmd) {\n')
        for msg in proto_msg_all:
            js.write('\t for (let key in protoIds.%s) {\n' % (msg['pkg']))
            js.write('\t\tif (protoIds.%s[key] == cmd) {\n' % (msg['pkg']))
            js.write('\t\t\treturn protos.{}[key]\n'.format(msg['pkg'].replace('_', '.')))
            js.write('\t\t}\n')
            js.write('\t}\n')
        js.write('}\n\n')
        js.write('''      
const toBuffer =  function(cmd, stream) {
    var buffer = new ArrayBuffer(stream.length + 2)
    var view = new DataView(buffer)
    var isStreamBuffer = stream instanceof Uint8Array
    view.setUint16(0, cmd, false)
    for (var i = 0, len = stream.length; i < len; i++) {
        if (isStreamBuffer) {
            view.setUint8(i + 2, stream[i]);
        } else {
            view.setUint8(i + 2, stream.charCodeAt(i))
        }
    }
    return buffer
}



const msgToBuffer =  function(cmd, msg) {
    var protoMessage = findMessage(cmd);
    if (!protoMessage) {
        cc.log('sendMsg warning: cmd not found', cmd, msg);
        return
    }
    var message = new protoMessage(msg);
    var buffer = protoMessage.encode(message).finish()
    return toBuffer(cmd, buffer)
}



const bufferToMsg = function(data) {

    var view = new DataView(data)
    let cmd = view.getUint16(0, false)
    var protoMessage = findMessage(cmd)
    if (!protoMessage) {
        console.log('onMessage warning: cmd not found', cmd)
        return
    }
    var buffer = data.slice(2)
    var pbBuffer = new Uint8Array(buffer.byteLength)
    for (var i = 0; i < buffer.byteLength; i++) {
        pbBuffer[i] = view.getUint8(2 + i)
    }
    var decoded = protoMessage.decode(pbBuffer)
    return {
        cmd : cmd,
        msg : decoded
    }
}

module.exports.protos = protos
module.exports.protoIds = protoIds
module.exports.msgToBuffer = msgToBuffer
module.exports.bufferToMsg = bufferToMsg

''')
        js.close()


if __name__ == '__main__':
    main()



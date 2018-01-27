

"use strict";

const protos = require('./proto')
var protoIds = { 
	 aa_bb_cc:require('./aa_bb_cc'), 
	 com_group_app:require('./com_group_app'), 
} 


const findMessage = function(cmd) {
	 for (let key in protoIds.aa_bb_cc) {
		if (protoIds.aa_bb_cc[key] == cmd) {
			return protos.aa.bb.cc[key]
		}
	}
	 for (let key in protoIds.com_group_app) {
		if (protoIds.com_group_app[key] == cmd) {
			return protos.com.group.app[key]
		}
	}
}

      
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


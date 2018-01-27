# auto_generate_pbjs
通过脚本自动解析protobuf生成相应js文件，生成及时可用的js代码

# 使用方法
使用方法极其简单
1. 将proto文件放入 proto文件夹
2. 运行python脚本
  ```shell
  python auto_generate_pbjs.js
  ```
  ok,大功告成
 
# 依赖环境
## 1. node npm 环境
## 2. protobufjs 依赖包
```shell
    npm install protobufjs -g
```
## 3. python 环境
python3

## 4.示例
```js
const utils = require('./bufferUtils')
let version = new utils.protos.com.group.app.Version()
version.version = '0.0.0'
const buffer = utils.msgToBuffer(protoIds.com_group_app.Version,version)
const msg = utils.bufferToMsg(buffer)
console.log(msg)
```
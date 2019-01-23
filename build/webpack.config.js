// 配置 webpack 内容
const path = require('path')
module.exports = {
  // 应用入口
  entry: {
    app: path.join(__dirname, '../client/app.js')
  }
}
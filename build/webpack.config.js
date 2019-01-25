// 配置 webpack 内容
const path = require('path') // 引入 path
const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
  // 应用入口
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  // 打包输出文件
  output: {
    /**
     * name: entry 下对应的入口
     * hash: 对 APP 打包完成之后，对文件加一个 hash 值，一旦有任何一个文件改变了，此 hash 值都会改变，浏览器就会去刷新缓存，达到最长使用浏览器的目的
     */
    filename: '[name].[hash].js',
    // 输出的文件存放个的位置
    path: path.join(__dirname, '../dist'),
    /**
     * 加在引用 JS 文件之后的目录
     * 为空：/app.hash.js
     * 设置目录：/public/app.hash.js
     */
    publicPath: ''
  },
  module: {
    rules: [
      {
        /**
         * test: 以 .jsx 作为结尾的所有文件的正则表达式
         * babel-loader: 能编译最新的 JS 工具，编译成浏览器可以直接执行的 es5 语法
         */
        test: /.jsx$/,
        loader: "babel-loader"
      },
      {
        /**
         * test: 以 .jsx 作为结尾的所有文件的正则表达式
         * babel-loader: 能编译最新的 JS 工具，编译成浏览器可以直接执行的 es5 语法
         */
        test: /.js/,
        loader: "babel-loader",
        exclude: [
          path.join(__dirname, '../node_modules')
        ]
      }
    ]
  },
  plugins: [
    /**
     * HTMLPlugin
     * 生成一个 HTML 页面，同时 webpack 编译的时候，把所生成的 entry 都注入到 HTML 里面，文件路径是根据 output 里配置的 filename 和 public 所拼接而成
     */
    new HTMLPlugin()
  ]
}
// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log('process.env.NODE_ENV', process.env.NODE_ENV); // 打印环境变量

const config = {
  mode:'development', // 开发模式
  // entry: path.resolve(__dirname,'./src/index.js'),    // 入口文件
  entry: path.resolve(__dirname,'./src/main.css'),    // 入口文件
  output: {
    filename: 'bundle.css',      // 打包后的文件名称
    path: path.resolve(__dirname,'./dist')  // 打包后的目录
  },
  module: {
    rules: [  // 转换规则
      {
        test: /\.css$/, // 匹配所有css文件
        use: ['style-loader','css-loader'] // use: 对应的loader名称
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'), // 静态文件目录，本地开发时不需要copy
    compress: true, // 是否启动压缩gzip
    port: 8082, // 端口号
  }
}

module.exports = (env, argv) => {
  console.log('argv.mode', argv.mode);
  return config;
}
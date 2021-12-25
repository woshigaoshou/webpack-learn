const commonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const path = require('path');


module.exports = merge(commonConfig, {
  mode: 'development', // 开发模式
  devtool: 'source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'), // 静态文件目录，本地开发时不需要copy，已废除
    static: {
      directory: path.resolve(__dirname, 'public'), // 静态文件目录，本地开发时不需要copy，代替contentBase
    },
    // compress: true, // 是否启动压缩gzip
    port: 8082, // 端口号
    hot: true,
  },
})

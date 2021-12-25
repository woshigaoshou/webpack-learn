const commonConfig = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
console.log(merge, commonConfig, commonConfig.target);

module.exports = merge(commonConfig, {
  mode: 'prod', // 生产环境
  plugins: [
    new CleanWebpackPlugin(),
  ]
})

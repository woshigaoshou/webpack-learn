// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


console.log('process.env.NODE_ENV', process.env.NODE_ENV); // 打印环境变量

const config = {
  mode:'none', // 开发模式
  // entry: path.resolve(__dirname,'./src/index.js'),    // 入口文件
  // entry: path.resolve(__dirname,'./src/main.css'),    // 入口文件
  // output: {
  //   filename: 'bundle.css',      // 打包后的文件名称
  //   path: path.resolve(__dirname,'./dist')  // 打包后的目录
  // },
  entry: path.resolve(__dirname,'./src/index.js'),    // 入口文件
  // entry: path.resolve(__dirname,'./src/main.css'),    // 入口文件
  output: {
    filename: 'bundle.js',      // 打包后的文件名称
    path: path.resolve(__dirname,'./dist')  // 打包后的目录
  },
  module: {
    rules: [  // 转换规则
      {
        test: /\.(s[ac]|c)ss$/, // 匹配所有css文件
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ] // use: 对应的loader名称
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'file-loader',
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif)$/i,
      //   type: 'asset',
      //   generator: {
      //     filename: '[name][hash:8][ext]'
      //   },
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 10 * 1024 // 超过100kb不转 base64
      //     }
      //   }
      // }
      {
        test: /\.js$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css'
    })

  ],
  devServer: {
    // contentBase: path.resolve(__dirname, 'public'), // 静态文件目录，本地开发时不需要copy
    // compress: true, // 是否启动压缩gzip
    port: 8082, // 端口号
  }
}

module.exports = (env, argv) => {
  console.log('argv.mode', argv.mode);
  return config;
}
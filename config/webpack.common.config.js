// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader/dist/index');


console.log('process.env.NODE_ENV', process.env.NODE_ENV); // 打印环境变量

const config = {
  target: 'web',
  // watch: true,
  // entry: path.resolve(__dirname,'./src/index.js'),    // 入口文件
  // entry: path.resolve(__dirname,'./src/main.css'),    // 入口文件
  // output: {
  //   filename: 'bundle.css',      // 打包后的文件名称
  //   path: path.resolve(__dirname,'./dist')  // 打包后的目录
  // },
  entry: path.resolve(__dirname,'../src/main.js'),    // 入口文件，path为动态获取当前目录下的绝对路径，filename则是文件路径
  // entry: path.resolve(__dirname,'./src/main.css'),    // 入口文件
  output: {
    path: path.resolve(__dirname,'../dist'),  // 打包后的目录
    filename: 'js/bundle.js'      // 打包后的文件名称
  },
  // resolve: {
  //   extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
  //   alias: {
  //     "@": path.resolve(__dirname, "../src"),
  //     "js": path.resolve(__dirname, "../src/js")
  //   }
  // },
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
      // {
      //   test: /\.(jpe?g|png|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: 'img/[name]_[hash:8].[ext]'
      //       }
      //     },
      //   ]
      // },
      {
        test: /\.(woff2?|eot|ttf)$/, // 匹配字体文件
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]_[hash:8][ext]'
        },
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       name: 'fonts/[name][hash:8].[ext]',
        //       // limit: 10 * 1024      // 超过10k打包到iconfont目录下
        //     }
        //   }
        // ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:8][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 超过100kb不转 base64
          }
        }
      },
      {
        test: /\.js$/i,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/i,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'webpack'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css'
    }),   
    new DefinePlugin({
      BASE_URL: "'./'",      // 默认双引号内为变量
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin()
  ],
}
module.exports = config;
// module.exports = (env, argv) => {
//   console.log('argv.mode', argv.mode);
//   return config;
// }

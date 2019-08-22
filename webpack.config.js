const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: {
    app: __dirname + '/src/main.js',//唯一入口文件,__dirname是nodejs里的一个全局变量，它指向的是我们项目的根目录
  },
  output: {
    path: path.resolve(__dirname, './dist'),//打包后的文件存放的地方
    filename: 'bundle.js'   //打包后输出文件的文件名
  },
  plugins: [
    // new webpack.BannerPlugin('一个文件头注释')
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },  // css loader ，顺序很重要
      // 关于图片loader，
      // 1、limit是转化base64的图片大小限制
      // 2、name是文件名，默认是hush值.[ext]，通过这样的参数设置可以变成原来的文件名
      //   并且，文件名前的8位hash值可以避免同名文件（即使是在不同的文件夹里）的覆盖
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, loader: ['url-loader?limit=10000&name=[hash:8]-[name].[ext]'] },
      // 3、字体文件
      { test: /\.(ttf|eot|svg|woff|woff2)$/, loader: 'url-loader' },
      // 4、babel
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      // 5、vue组件
      { test: /\.vue$/, loader: 'vue-loader' },
    ]
  },
  // webpack-dev-server配置
  devServer: {
    //  --open --port 3000 --contentBase ./ --hot
    open: true,
    port: 3000,
    contentBase: './',
    hot: true,
  },
  resolve: {
    alias: {
      // 'vue$':'vue/dist/vue.js'
    }
  }
};
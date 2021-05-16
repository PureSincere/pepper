const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 配置文件导出类型为单个对象
const config = {
  name: "pepper-webpack-config",
  output: {
    filename: "[name][hash].js",
    path: path.resolve(__dirname, "dist"),
    // libraryTarget: "commonjs"
    library: "Pepper",
    libraryTarget: "var"
  },
  module: {
    rules: [
      { test: /.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            // limit: 2048 // 限制文件大小小于2048字节，使用base64方式打包
          }
        }
      },
    ]
  },
  entry: {
    pepper: path.resolve(__dirname, "./public/index.js"),
  },
  optimization: {
    minimize: false
  },
  plugins: [
    //清理构建文件夹
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // 引用的HTML模板
      template: path.resolve(__dirname, "./public/index.html"),
      // 生成的文件名称 page文件夹下的index.html 最终生成dist/page/index.html
      filename: path.resolve(__dirname, "./dist/index.html"),
      // title
      title: '飞机大战',
      inject: false,
      // 引入的js文件，在入口文件中配置好
      // chunks: ['./index.js'],
      // //css文件通过在js文件中import引入，打包后就会通过link标签插入到HTML文件中
      // //hash == true 时，打包编译后的HTML文件引入的js、css文件带有hash
      hash: true
    })
  ]
}

module.exports = config;

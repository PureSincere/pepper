const path = require('path');

// 配置文件导出类型为单个对象
const config = {
  name: "canvas-frame-webpack-config",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    // libraryTarget: "commonjs"
    library: "CanvasFrame",
    libraryTarget: "var"
  },
  entry: {
    canvasFrame: "./index.js"
  },
  optimization: {
    minimize: false
  }
}

module.exports = config;

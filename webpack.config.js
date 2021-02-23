const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    client: './src/index.js', // client side app
    bundle: './src/ssr.js' // ssr rendered app
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
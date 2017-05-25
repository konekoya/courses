const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/src/index.js',
  output: {
    path: './app/build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}
var webpack = require('webpack');
var path = require('path');

process.noDeprecation = true;

module.exports = {
  entry: './client.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react'],
        },
      },
    ],
  },
};

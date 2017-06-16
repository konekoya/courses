const path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress:  true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader'
      }
    ]
  }
};

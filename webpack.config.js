var path = require('path');

module.exports = {
  entry: {
    step1: './js/step1/index.js',
    step2: './js/step2/index.js',
    step3: './js/step3/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: [path.resolve(__dirname), path.resolve(__dirname, 'assets')],
    watchContentBase: true
  }
};

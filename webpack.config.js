'use strict'

const path = require('path');

module.exports = {
  devtool: 'source-map',
  context: path.join(__dirname, 'src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './[name].build.js',
    publicPath: '/assets',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel']
      },
      {
        test: /\.scss$/,
        use: [
          'style',
          'css?sourceMap',
          'postcss',
          'resolve-url',
          'sass?sourceMap'
        ]
      }
    ]
  },
  devServer: {
    // To proxy all requests, uncomment the following:
    // proxy: {
    //   '**': 'http://localhost:3000',
    // },
    contentBase: path.join(__dirname, 'src'),
    // inline: true,
    // hot: true,
  },
}

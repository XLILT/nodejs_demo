'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: "localhost",
    port: 8889,
    hot: true,
    //hotOnly: true,    
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}, common);

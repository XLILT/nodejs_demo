'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: "0.0.0.0",
    port: 8088,    
    open: true,
    hot: true,
    inline: true,
    proxy:{
      '/test_proxy': {
          target: 'https://www.baidu.com',
          changeOrigin: true,
          pathRewrite: {
            '^/test_proxy': '/'
          }
      }
    }
  }
});

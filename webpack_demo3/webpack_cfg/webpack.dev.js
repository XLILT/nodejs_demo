'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: "localhost",
    port: 8088,
    hot: true,
    open: true,
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

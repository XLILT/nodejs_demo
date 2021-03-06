'use strict';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: "0.0.0.0",
    port: 8088,
    hot: true,
    open: true,
    // proxy: {
    //   '/courses': {
    //     // context: () => true,
    //     // context: ['courses', 'feedback'],
    //     target: 'http://localhost:3000',
    //     changeOrigin: true
    //     // pathRewrite: {
    //     //   '^/test_proxy': '/'
    //     // }
    //   }
    // }
    proxy: [{
      context: ['/courses', '/feedback'],
      target: 'http://localhost:3000',
      changeOrigin: true
    }]
  }
});

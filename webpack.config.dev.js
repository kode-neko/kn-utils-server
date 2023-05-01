const path = require('path');
const configProd = require('./webpack.config.js');

const devServer= {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  compress: true,
  port: 9000,
};

const config = {
  ...configProd,
  mode: 'development',
  devServer
};

module.exports = config;

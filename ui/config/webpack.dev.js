const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
};

module.exports = merge(commonConfig, devConfig);

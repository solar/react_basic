/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
/* eslint-enable import/no-extraneous-dependencies */

const merge = require('./webpack.config.base.babel').merge;

module.exports = merge({
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test'),
    }),
  ],
  devtool: 'source-map',
});

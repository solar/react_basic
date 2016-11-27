/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */

const merge = require('./webpack.config.base.babel').merge;

module.exports = merge({
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    port: 8000,
    historyApiFallback: true,
    inline: true,
    contentBase: './src/',
  },
});

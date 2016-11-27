const _ = require('lodash');
const path = require('path');

const defaults = {
  entry: [
    path.join(process.cwd(), 'src/index.js'),
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {
    rules: [
      // Eslint loader
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },

      { test: /\.html$/, loader: 'html-loader' },

      { test: /\.css$/, include: /node_modules/, loaders: ['style-loader', 'css-loader'] },

      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },

      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader' },
      {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          'image-webpack-loader?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ],
      },
      { test: /\.json$/, loader: 'json-loader' },

      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },

      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },

      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },

      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
      },
    ],
    noParse: [new RegExp('node_modules/localforage/dist/localforage.js')],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
  },
};

module.exports.defaults = defaults;

module.exports.merge = config => _.merge({}, defaults, config);

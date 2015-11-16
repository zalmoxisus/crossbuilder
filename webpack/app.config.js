import path from 'path';
import webpack from 'webpack';

export default {
  entry: {
    background: [ path.join(__dirname, '../src/browser/chromeApp/index') ],
    window: [ path.join(__dirname, '../src/browser/window/index') ]
  },
  output: {
    path: path.join(__dirname, '../build/app/js'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      __DEVELOPMENT__: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
    alias: {app: path.join(__dirname, '../src/app')},
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw']
    }]
  }
};
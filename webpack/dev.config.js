import path from 'path';
import webpack from 'webpack';
import baseConfig from './base.config';

const port = 3000;
const entry = [
  `webpack-dev-server/client?http://localhost:${port}`,
  'webpack/hot/only-dev-server'
];

export default baseConfig(
  undefined,
  {
    path: path.join(__dirname, '../dev/js'),
    publicPath: `http://localhost:${port}/js/`
  },
  {},
  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  [{
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      plugins: ['react-transform'],
      extra: {
        'react-transform': {
          transforms: [{
            transform: 'react-transform-hmr',
            imports: ['react'],
            locals: ['module']
          }, {
            transform: 'react-transform-catch-errors',
            imports: ['react', 'redbox-react']
          }]
        }
      }
    }
  }],
  entry
);

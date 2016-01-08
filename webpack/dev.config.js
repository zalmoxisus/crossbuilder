import path from 'path';
import webpack from 'webpack';
import baseConfig from './base.config';

const port = 3000;
const entry = [
  `webpack-dev-server/client?http://localhost:${port}`,
  'webpack/hot/only-dev-server'
];
const srcPath = path.join(__dirname, '../src/browser/');

const config = baseConfig({
  input: {
    background: [`${srcPath}extension/background/index`, ...entry],
    window: [`${srcPath}window/index`, ...entry],
    popup: [`${srcPath}extension/popup/index`, ...entry],
    inject: [`${srcPath}extension/inject/index`, ...entry],
    app: [path.join(__dirname, '../src/web/index'), ...entry]
  },
  output: {
    path: path.join(__dirname, '../dev/js'),
    publicPath: `http://localhost:${port}/js/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  loaders: [{
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/,
    query: {
      presets: ['es2015', 'stage-0', 'react'],
      plugins: [
        'add-module-exports',
        'transform-decorators-legacy',
        [
          'react-transform',
          {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }, {
              transform: 'react-transform-catch-errors',
              imports: ['react', 'redbox-react']
            }]
          }
        ]
      ]
    }
  }],
  entry
});

config.devtool = 'eval';

export default config;

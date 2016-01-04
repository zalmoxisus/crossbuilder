import path from 'path';
import webpackTargetElectronRenderer from 'webpack-target-electron-renderer';
import baseConfig from './base.config';

const config = baseConfig({
  input: {
    app: [path.join(__dirname, '../src/web/index')]
  },
  output: {
    path: path.join(__dirname, '../build/electron/js')
  },
  globals: {
    'process.env': {
      NODE_ENV: '"production"'
    }
  }
});

config.target = webpackTargetElectronRenderer(config);

export default config;

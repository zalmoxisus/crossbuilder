import path from 'path';
import baseConfig from './base.config';

export default baseConfig(
  {
    background: [ path.join(__dirname, '../src/browser/chromeApp/index') ],
    window: [ path.join(__dirname, '../src/browser/window/index') ]
  },
  {
    path: path.join(__dirname, '../build/app/js')
  },
  {
    'process.env': {
      NODE_ENV: '"production"'
    }
  }
);

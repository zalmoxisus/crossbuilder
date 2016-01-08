import path from 'path';
import baseConfig from './base.config';

export default baseConfig({
  input: {
    background: [path.join(__dirname, '../src/chromeApp/index')],
    app: [path.join(__dirname, '../src/web/index')]
  },
  output: {
    path: path.join(__dirname, '../build/app/js')
  },
  globals: {
    'process.env': {
      NODE_ENV: '"production"'
    }
  }
});

import path from 'path';
import baseConfig from './base.config';

export default baseConfig({
  input: {
    background: [path.join(__dirname, '../src/chromeApp/')],
    app: [path.join(__dirname, '../src/app')]
  },
  output: {
    path: path.join(__dirname, '../build/app')
  },
  globals: {
    'process.env': {
      NODE_ENV: '"production"'
    }
  }
});

import path from 'path';
import baseConfig from './base.config';

export default baseConfig({
  input: {
    app: [path.join(__dirname, '../src/app/')]
  },
  output: {
    path: path.join(__dirname, '../build/electron')
  },
  globals: {
    'process.env': {
      NODE_ENV: '"production"'
    }
  }
});

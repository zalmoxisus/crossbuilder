import path from 'path';
import baseConfig from './base.config';

export default baseConfig(
  undefined,
  {
    path: path.join(__dirname, '../build/extension/js')
  },
  {
    'process.env': {
      NODE_ENV: '"production"'
    }
  }
);

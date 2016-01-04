import gulp from 'gulp';
import path from 'path';
import packager from 'electron-packager';
import config from '../../src/electron/package.json';

const packagerOptions = {
  dir: path.resolve(__dirname, '../../build/electron'),
  out: path.resolve(__dirname, '../../build/executables'),
  name: config.productName,
  platform: 'all',
  arch: 'all',
  version: config.electronVersion,
  'app-version': config.version
};

gulp.task('pack:electron', () => {
  packager(packagerOptions, function (error, appPath) {
    if (error) throw error;
  });
});

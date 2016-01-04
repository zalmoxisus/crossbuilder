import gulp from 'gulp';
import path from 'path';
import packager from 'electron-packager';
import config from '../../src/electron/package.json';

const packagerOptions = {
  dir: path.resolve(__dirname, '../../build/electron'),
  out: path.resolve(__dirname, '../../build/executables'),
  name: config.productName,
  all: true,
  /* platform: 'darwin',
  arch: 'all',
  icon: path.resolve(__dirname, '../../src/electron/resources/osx/icon.icns'), */
  version: config.electronVersion,
  'app-version': config.version
};

gulp.task('pack:electron', () => {
  packager(packagerOptions, function (error, appPath) {
    if (error) throw error;
  });
});

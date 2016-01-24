import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import prodConfig from '../../webpack/prod.config';
import appConfig from '../../webpack/app.config';
import electronConfig from '../../webpack/electron.config';
import webConfig from '../../webpack/web.config';
import cordovaConfig from '../../webpack/cordova.config';

const build = (config, callback) => {
  let myConfig = Object.create(config);
  webpack(myConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({ colors: true }));
    callback();
  });
};

gulp.task('webpack:build:extension', (callback) => {
  build(prodConfig, callback);
});
gulp.task('webpack:build:app', (callback) => {
  build(appConfig, callback);
});
gulp.task('webpack:build:electron', (callback) => {
  build(electronConfig, callback);
});
gulp.task('webpack:build:web', (callback) => {
  build(webConfig, callback);
});
gulp.task('webpack:build:cordova', (callback) => {
  build(cordovaConfig, callback);
});

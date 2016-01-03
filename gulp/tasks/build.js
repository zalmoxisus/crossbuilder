import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import prodConfig from '../../webpack/prod.config';
import appConfig from '../../webpack/app.config';

gulp.task('webpack:build:extension', (callback) => {
  let myConfig = Object.create(prodConfig);
  webpack(myConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({ colors: true }));
    callback();
  });
});

gulp.task('webpack:build:app', (callback) => {
  let myConfig = Object.create(appConfig);
  webpack(myConfig, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build]', stats.toString({ colors: true }));
    callback();
  });
});

import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import prodConfig from '../../webpack/prod.config';
import appConfig from '../../webpack/app.config';

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

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import crdv from 'chromedriver';

gulp.task('chrome:test', () => {
  crdv.start();
  return gulp.src('./test/chrome/**/*.js')
    .pipe(mocha({ require: ['co-mocha'] }))
    .on('end', () => crdv.stop());
});

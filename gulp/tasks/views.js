import gulp from 'gulp';
import jade from 'gulp-jade';

gulp.task('views:dev', () => {
  gulp.src('./src/browser/views/*.jade')
    .pipe(jade({
      locals: { env: 'dev' }
    }))
    .pipe(gulp.dest('./dev'));
});

gulp.task('views:build:extension', () => {
  gulp.src('./src/browser/views/*.jade')
    .pipe(jade({
      locals: { env: 'prod' }
    }))
    .pipe(gulp.dest('./build/extension'));
});

gulp.task('views:build:app', () => {
  gulp.src('./src/browser/views/*.jade')
    .pipe(jade({
      locals: { env: 'prod' }
    }))
    .pipe(gulp.dest('./build/app'));
});

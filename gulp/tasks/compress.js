import gulp from 'gulp';
import zip from 'gulp-zip';

gulp.task('compress:extension', () => {
  gulp.src('build/extension/**')
    .pipe(zip('extension.zip'))
    .pipe(gulp.dest('./build'));
});

gulp.task('compress:app', () => {
  gulp.src('build/app/**')
    .pipe(zip('app.zip'))
    .pipe(gulp.dest('./build'));
});

gulp.task('compress:firefox', () => {
  gulp.src('build/firefox/**')
    .pipe(zip('firefox.xpi'))
    .pipe(gulp.dest('./build'));
});

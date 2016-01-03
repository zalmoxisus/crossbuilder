import gulp from 'gulp';
import rename from 'gulp-rename';

gulp.task('copy:dev', () => {
  gulp.src('./src/browser/extension/manifest.dev.json')
    .pipe(rename('manifest.json'))
    .pipe(gulp.dest('./dev'));
  gulp.src('./src/assets/**/*').pipe(gulp.dest('./dev'));
});

gulp.task('copy:build:extension', () => {
  gulp.src('./src/browser/extension/manifest.prod.json')
    .pipe(rename('manifest.json'))
    .pipe(gulp.dest('./build/extension'));
  gulp.src('./src/assets/**/*').pipe(gulp.dest('./build/extension'));
});

gulp.task('copy:build:app', () => {
  gulp.src('./src/browser/chromeApp/manifest.json')
    .pipe(rename('manifest.json'))
    .pipe(gulp.dest('./build/app'));
  gulp.src('./src/assets/**/*').pipe(gulp.dest('./build/app'));
});

gulp.task('copy:build:firefox', ['build:extension'], () => {
  gulp.src('./build/extension/**').pipe(gulp.dest('./build/firefox'))
    .on('finish', function () {
      gulp.src('./src/browser/firefox/manifest.json')
        .pipe(gulp.dest('./build/firefox'));
    });
});

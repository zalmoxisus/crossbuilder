import gulp from 'gulp';
import rename from 'gulp-rename';

const copy = (dest, manifest) => () => {
  if (manifest) {
    gulp.src(`./src/browser/${manifest}`)
      .pipe(rename('manifest.json'))
      .pipe(gulp.dest(dest));
  }
  gulp.src('./src/assets/**/*').pipe(gulp.dest(dest));
};

gulp.task('copy:dev', copy('./dev', 'extension/manifest.dev.json'));
gulp.task('copy:build:extension', copy('./build/extension', 'extension/manifest.prod.json'));
gulp.task('copy:build:app', copy('./build/app', 'chromeApp/manifest.json'));

gulp.task('copy:build:firefox', ['build:extension'], () => {
  gulp.src('./build/extension/**').pipe(gulp.dest('./build/firefox'))
    .on('finish', function () {
      gulp.src('./src/browser/firefox/manifest.json')
        .pipe(gulp.dest('./build/firefox'));
    });
});

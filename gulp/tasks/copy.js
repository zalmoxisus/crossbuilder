import gulp from 'gulp';
import rename from 'gulp-rename';

const copy = (dest, manifest) => () => {
  if (manifest) {
    gulp.src(`./src/${manifest}`)
      .pipe(rename('manifest.json'))
      .pipe(gulp.dest(dest));
  }
  gulp.src('./src/assets/**/*').pipe(gulp.dest(dest));
};

const manifestDevSource = 'browser/extension/manifest.dev.json';

gulp.task('copy:dev', copy('./dev', manifestDevSource));
gulp.task('copy:build:extension',
  copy('./build/extension', 'browser/extension/manifest.prod.json'));
gulp.task('copy:build:app', copy('./build/app', 'chromeApp/manifest.json'));
gulp.task('copy:build:web', copy('./build/web'));
gulp.task('copy:build:cordova', copy('./www'));

gulp.task('copy:build:electron', () => {
  gulp.src(['./src/electron/**', '!./src/electron/resources', '!./src/electron/resources/**'])
    .pipe(gulp.dest('./build/electron'));
  copy('./build/electron')();
});

gulp.task('copy:build:firefox', ['build:extension'], () => {
  gulp.src('./build/extension/**').pipe(gulp.dest('./build/firefox'))
    .on('finish', function () {
      gulp.src('./src/browser/firefox/manifest.json')
        .pipe(gulp.dest('./build/firefox'));
    });
});

gulp.task('copy:watch', () => {
  gulp.watch(`./src/${manifestDevSource}`, ['copy:dev']);
});
import gulp from 'gulp';
import zip from 'gulp-zip';

const compress = (src, name, dest = './build') => () => {
  gulp.src(src)
    .pipe(zip(name))
    .pipe(gulp.dest(dest));
};

gulp.task('compress:extension',
  compress('./build/extension/**', 'extension.zip')
);
gulp.task('compress:app',
  compress('./build/app/**', 'app.zip')
);
gulp.task('compress:firefox',
  compress('./build/firefox/**', 'firefox.xpi')
);

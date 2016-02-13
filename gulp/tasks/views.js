import gulp from 'gulp';
import jade from 'gulp-jade';

const paths = ['./src/browser/views/*.jade', './src/views/*.jade'];

const compile = (dest, path, env = 'prod') => () => {
  gulp.src(path)
    .pipe(jade({
      locals: { env }
    }))
    .pipe(gulp.dest(dest));
};

gulp.task('views:dev', compile('./dev', paths, 'dev'));
gulp.task('views:build:extension', compile('./build/extension', paths[0]));
gulp.task('views:build:app', () => {
  compile('./build/app', paths[1])();
  compile('./build/app', './src/browser/views/background.jade')();
});
gulp.task('views:build:electron', compile('./build/electron', paths[1]));
gulp.task('views:build:web', compile('./build/web', paths[1]));
gulp.task('views:build:cordova', compile('./www', paths[1]));
gulp.task('views:watch', () => {
  gulp.watch(paths, ['views:dev']);
});
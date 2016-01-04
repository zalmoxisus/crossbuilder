import gulp from 'gulp';
import jade from 'gulp-jade';

const compile = (dest, p = 0, env = 'prod') => () => {
  const paths = ['./src/browser/views/*.jade', './src/views/*.jade'];
  gulp.src(p === 'all' ? paths : paths[p])
    .pipe(jade({
      locals: { env }
    }))
    .pipe(gulp.dest(dest));
};

gulp.task('views:dev', compile('./dev', 'all', 'dev'));
gulp.task('views:build:extension', compile('./build/extension'));
gulp.task('views:build:app', compile('./build/app'));
gulp.task('views:build:electron', compile('./build/electron', 1));
gulp.task('views:build:web', compile('./build/web', 1));

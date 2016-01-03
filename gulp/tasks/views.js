import gulp from 'gulp';
import jade from 'gulp-jade';

const compile = (dest, env = 'prod') => () => {
  gulp.src('./src/browser/views/*.jade')
    .pipe(jade({
      locals: { env }
    }))
    .pipe(gulp.dest(dest));
};

gulp.task('views:dev', compile('./dev', 'dev'));
gulp.task('views:build:extension', compile('./build/extension'));
gulp.task('views:build:app', compile('./build/app'));

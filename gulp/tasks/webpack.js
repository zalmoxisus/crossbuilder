import gulp from 'gulp';
import fs from 'fs';

gulp.task('replace-webpack-code', () => {
  const replaceTasks = [{
    from: './webpack/replace/JsonpMainTemplate.runtime.js',
    to: './node_modules/webpack/lib/JsonpMainTemplate.runtime.js'
  }, {
    from: './webpack/replace/log-apply-result.js',
    to: './node_modules/webpack/hot/log-apply-result.js'
  }];
  replaceTasks.forEach(task => fs.writeFileSync(task.to, fs.readFileSync(task.from)));
});

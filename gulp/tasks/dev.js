import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import devConfig from '../../webpack/dev.config';
const port = 3000;

gulp.task('webpack-dev-server', () => {
  let myConfig = Object.create(devConfig);
  new WebpackDevServer(webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
  }), {
    contentBase: './dev',
    publicPath: myConfig.output.publicPath,
    stats: { colors: true },
    noInfo: true,
    hot: true,
    historyApiFallback: true
  }).listen(port, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', `listening at port ${port}`);
  });
});

import gulp from 'gulp';
import path from 'path';
import del from 'del';
import zip from 'gulp-zip';
import electronBuilder from 'electron-builder';
import config from '../../src/electron/package.json';

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

gulp.task('compress:electron:osx', () => {
  del([`./build/${config.productName}.dmg`]).then(paths => {
    console.warn('paths', paths);
    const builder = electronBuilder.init();
    builder.build({
      appPath: path.resolve(
        `./build/executables/${config.productName}-darwin-x64/${config.productName}.app`
      ),
      platform: 'osx',
      out: path.resolve('./build'),
      config: './src/electron/resources/config.json'
    }, function (err) {
      if (err) console.error(err);
    });
  });
});

gulp.task('compress:win32-ia32',
  compress(`./build/executables/${config.productName}-win32-ia32/**`, 'win32-ia32.zip')
);
gulp.task('compress:win32-x64',
  compress(`./build/executables/${config.productName}-win32-x64/**`, 'win32-x64.zip')
);
gulp.task('compress:linux-ia32',
  compress(`./build/executables/${config.productName}-linux-ia32/**`, 'linux-ia32.zip')
);
gulp.task('compress:linux-x64',
  compress(`./build/executables/${config.productName}-linux-x64/**`, 'linux-x64.zip')
);

gulp.task('compress:electron',
  [
    'compress:electron:osx', 'compress:win32-ia32', 'compress:win32-x64',
    'compress:linux-ia32', 'compress:linux-x64'
  ]
);

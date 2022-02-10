import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import webpack from 'webpack-stream';

export const js = () => {
  return app
    .src(app.path.src.js)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'JS',
          message: '<%= error.message %>',
        })
      )
    )
    .pipe(
      babel({
        presets: ['@babel/preset-env'],
      })
    )
    .pipe(uglify())
    .pipe(
      webpack({
        mode: app.isProd ? 'production' : 'development',
      })
    )
    .pipe(app.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
};

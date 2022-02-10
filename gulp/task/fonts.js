import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const fonts = () => {
  return app
    .src(app.path.src.fonts)

    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'FONTS',
          message: '<%= error.message %>',
        })
      )
    )

    // .pipe(fonter({ formats: ['ttf', 'woff', 'eot'] }))
    // .pipe(app.dest(`./src/fonts`))
    // .pipe(ttf2woff2())
    // .pipe(app.dest(`./src/fonts`))
    .pipe(app.dest(app.path.build.fonts))
    .pipe(app.plugins.browserSync.stream());
};

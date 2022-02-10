import svgSprite from 'gulp-svg-sprite';

export const svg = () => {
  return app
    .src(app.path.src.svg)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'SVG',
          message: '<%= error.message %>',
        })
      )
    )

    .pipe(svgSprite({ mode: { stack: { sprite: `./icons`, example: true, dest: '.' } } }))
    .pipe(app.dest(app.path.build.svg))
    .pipe(app.plugins.browserSync.stream());
};
// { mode: { stack: { sprite: `./svg`, example: true } } }

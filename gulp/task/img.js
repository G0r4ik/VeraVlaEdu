import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

export const img = () => {
  return app
    .src(app.path.src.img)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'IMG',
          message: '<%= error.message %>',
        })
      )
    )

    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(webp())
    .pipe(app.plugins.gulpIf(app.isProd, app.dest(app.path.build.img)))
    .pipe(app.src(app.path.src.img))
    .pipe(app.plugins.gulpIf(app.isProd, app.plugins.newer(app.path.build.img)))
    .pipe(app.plugins.gulpIf(app.isProd, imagemin({ verbose: true })))
    .pipe(app.dest(app.path.build.img))
    .pipe(app.src(app.path.src.svg))
    .pipe(app.dest(app.path.build.img))
    .pipe(app.plugins.browserSync.stream());
};

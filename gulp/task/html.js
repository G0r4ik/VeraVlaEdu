import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import htmlhint from 'gulp-htmlhint';

export const html = () => {
  return app
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'HTML',
          message: '<%= error.message %>',
        })
      )
    )
    .pipe(fileInclude())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(app.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};

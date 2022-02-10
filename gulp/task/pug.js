import htmlmin from 'gulp-htmlmin';
import htmlhint from 'gulp-htmlhint';
import pugPlugin from 'gulp-pug';
import puglint from 'gulp-pug-linter';

export const pug = () => {
  return app
    .src(app.path.src.pug)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'PUG',
          message: '<%= error.message %>',
        })
      )
    )
    .pipe(puglint({ reporter: 'default' }))
    .pipe(pugPlugin({ verbose: true, pretty: true, locals: {} }))
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(app.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};

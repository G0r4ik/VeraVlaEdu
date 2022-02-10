import gulpStylelint from 'gulp-stylelint';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano'; //  41s
import cleancss from 'gulp-clean-css'; // 51s

import shorthand from 'gulp-shorthand';
import groupMedia from 'gulp-group-css-media-queries';
import webpCss from 'gulp-webp-css';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app
      .src(app.path.src.scss, { sourcemaps: true })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: 'SCSS',
            message: '<%= error.message %>',
          })
        )
      )

      .pipe(app.src('./src/scss/**/*.scss'))
      .pipe(
        gulpStylelint({
          reporters: [{ formatter: 'verbose', console: true }],
        })
      )

      .pipe(sass({ outputStyle: 'expanded' }))
      .pipe(app.plugins.gulpIf(app.isProd, webpCss()))

      .pipe(
        app.plugins.gulpIf(
          app.isProd,
          autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 3 versions'],
          })
        )
      )
      .pipe(app.plugins.gulpIf(app.isProd, shorthand()))
      .pipe(app.plugins.gulpIf(app.isProd, groupMedia()))

      .pipe(app.plugins.gulpIf(app.isProd, cssnano()))
      // .pipe(app.plugins.gulpIf(app.isProd, cleancss({ compatibility: 'ie11', level: 2, sourceMap: true })))
      .pipe(app.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream())
  );
};

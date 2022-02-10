import zipPlugin from 'gulp-zip';

export const zip = () => {
  app.plugins.del('./archive.zip');
  return app
    .src(`${app.path.buildFolder}/**/*.*`)
    .pipe(zipPlugin('archive.zip'))
    .pipe(app.dest('./'));
};

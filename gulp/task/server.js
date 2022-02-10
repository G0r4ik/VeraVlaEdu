export const server = (done) => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.build.html}`,
    },
    browser: 'firefox',
    notify: true,
    port: 3000,
  });
};

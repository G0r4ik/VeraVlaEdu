import gulp from 'gulp';
const { src, dest, parallel, series, watch } = gulp;
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = { path, src, dest, plugins, isProd: process.argv.includes('--p') };

import { reset } from './gulp/task/reset.js';
import { server } from './gulp/task/server.js';
import { fonts } from './gulp/task/fonts.js';
import { img } from './gulp/task/img.js';
import { svg } from './gulp/task/svg.js';

import { html } from './gulp/task/html.js';
// import { pug } from './gulp/task/pug.js';
// import { css } from './gulp/task/css.js';
import { scss } from './gulp/task/scss.js';
import { js } from './gulp/task/js.js';

import { zip } from './gulp/task/zip.js';

function watcher() {
  watch(path.watch.html, html);
  watch(path.watch.scss, scss);
  watch(path.watch.js, js);
  watch(path.watch.fonts, fonts);
  watch(path.watch.img, img);
  // watch(path.watch.svg, svg);
}

// img fonts в отдельный
//  lint в отдельный
const mainTasks = parallel(html, scss, js, fonts, img);
const prod = series(reset, mainTasks);
const dep = series(prod, parallel(server, watcher));
const deployZip = series(reset, mainTasks, zip);
export { prod };
export { dep };
export { deployZip };

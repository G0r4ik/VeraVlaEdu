const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}`,
    css: `${buildFolder}`,
    js: `${buildFolder}`,
    fonts: `${buildFolder}/fonts`,
    img: `${buildFolder}/img`,
    svg: `${buildFolder}`,
  },
  src: {
    html: `${srcFolder}/*.html`,
    pug: `${srcFolder}/*.pug`,
    css: `${srcFolder}/css/**.css`,
    scss: `${srcFolder}/scss/main.scss`,
    js: `${srcFolder}/js/main.js`,
    fonts: `${srcFolder}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2}`,
    img: `${srcFolder}/img/*.{png,jpeg,jpg,webp,gif,svg}`,
    svg: `${srcFolder}/svg/*.svg`,
  },
  watch: {
    html: `${srcFolder}/**/*.html`,
    pug: `${srcFolder}/**/*.pug`,
    css: `${srcFolder}/css/**/*.css`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    fonts: `${srcFolder}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2}`,
    img: `${srcFolder}/img/**.{png,jpeg,jpg,webp,gif,svg}`,
    svg: `${srcFolder}/svg/**/*.svg`,
  },
  buildFolder,
  srcFolder,
};

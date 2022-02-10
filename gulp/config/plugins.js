import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import newer from 'gulp-newer';
import gulpIf from 'gulp-if';
import del from 'del';

export const plugins = { plumber, notify, browserSync, newer, gulpIf, del };

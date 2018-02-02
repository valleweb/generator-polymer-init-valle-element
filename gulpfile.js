'use strict';
const path = require('path');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const nsp = require('gulp-nsp');
const plumber = require('gulp-plumber');

gulp.task('nsp', (cb) => {
  nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('test', (cb) => {
  let mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', (err) => {
      mochaErr = err;
    })
    .on('end', () => {
      cb(mochaErr);
    });
});

gulp.task('watch', () => {
  gulp.watch(['generators/**/*.js', 'test/**'], ['test']);
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['test']);

'use strict';
const path = require('path');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const plumber = require('gulp-plumber');

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

gulp.task('default', ['test']);

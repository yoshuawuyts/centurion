'use strict';

/**
 * Module dependencies
 */

var path = require('../config.json');
var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var grep = require('gulp-grep-stream');
var esformatter = require('gulp-esformatter');
var eslint = require('gulp-eslint');
var eslintStylish = require('eslint-stylish');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('lint', function() {
  /*
    // api
    gulp.src(path.api.src)
      .pipe(watch({
        name: 'Lint: api'
      }))
      .pipe(esformatter())
      .pipe(eslint())
      .pipe(eslint.format(eslintStylish))
      .pipe(gulp.dest(path.api.cwd));

    // modules
    gulp.watch(path.tasks.src, function(stream) {
      stream.pipe(esformatter())
        .pipe(eslint())
        .pipe(eslint.format(eslintStylish))
        .pipe(gulp.dest(path.tasks.cwd));
    });

    // tasks
    gulp.src(path.tasks.src)
      .pipe(watch({
        name: 'Lint: tasks',
      }))
      .pipe(plumber())
      .pipe(esformatter())
      .pipe(eslint())
      .pipe(eslint.format(eslintStylish))
      .pipe(gulp.dest(path.tasks.cwd));

    // tests
    gulp.src(path.tests.src)
      .pipe(watch({
        name: 'Lint: tests'
      }))
      .pipe(plumber())
      .pipe(esformatter())
      .pipe(eslint())
      .pipe(eslint.format(eslintStylish))
      .pipe(gulp.dest(path.tests.cwd));

    */
  /*
  gulp.src(path.tasks.src)
  .pipe(watch(function(files, done) {

  return files.pipe(esformatter())
  .pipe(eslint())
  .pipe(eslint.format(eslintStylish))
  .pipe(gulp.dest(path.tasks.cwd))
  .on('end', done);

  }));
  */

  gulp.src(path.tasks.src)
    .pipe(watch(function(files) {
    return files.pipe(esformatter()) 
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish)); 
  }));

});
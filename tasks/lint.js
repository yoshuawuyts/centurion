'use strict';

/**
 * Module dependencies
 */

var eslintStylish = require('eslint-stylish');
var esformatter = require('gulp-esformatter');
var path = require('./config.json');
var eslint = require('gulp-eslint');
var watch = require('gulp-watch');
var es = require('event-stream');
var gulp = require('gulp');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('lint', function() {

  return es.concat(
    gulp.src(path.api.src)
      .pipe(gulp.dest(path.api.cwd)),
    gulp.src(path.modules.src)
      .pipe(gulp.dest(path.modules.cwd)),
    gulp.src(path.tasks.src)
      .pipe(gulp.dest(path.tasks.cwd)),
    gulp.src(path.tests.src)
      .pipe(gulp.dest(path.tests.cwd))
  )
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))

});
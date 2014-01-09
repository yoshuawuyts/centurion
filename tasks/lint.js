'use strict';

/**
 * Module dependencies
 */

var path = require('../gulpfile');
var gulp = require('gulp');
var esformatter = require('gulp-esformatter');
var eslint = require('gulp-eslint');
var eslintStylish = require('eslint-stylish');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('lint', function() {

  // api
  gulp.src(path.api.src)
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.api.cwd));

  // modules
  gulp.src(path.modules.src)
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.modules.cwd));

  // tasks
  gulp.src(path.tasks.src)
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.tasks.cwd));

  // tests
  gulp.src(path.tests.src)
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.tests.cwd));

});
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
  gulp.src(path.lint.api.src)
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.lint.api.dest));

  // modules
  gulp.src(path.lint.modules.src)
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.lint.modules.dest));

  // tasks
  gulp.src(path.lint.tasks.src)
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.lint.tasks.dest));

  // tests
  gulp.src(path.lint.tests.src)
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.lint.tests.dest));

});
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
      name: 'lint.api'
    }))
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.api.cwd));
    */

  // modules
  gulp.src(path.modules.src)
    .pipe(watch({
      name: 'lint.modules'
    }))
    .pipe(plumber())
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.modules.cwd));

  // tasks
  gulp.src(path.tasks.src)
    .pipe(watch({
      name: 'lint.tasks',
    }))
    .pipe(plumber())
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.tasks.cwd));

  // tests
  gulp.src(path.tests.src)
    .pipe(watch({
      name: 'lint.tests'
    }))
    .pipe(plumber())
    .pipe(esformatter())
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))
    .pipe(gulp.dest(path.tests.cwd));

});
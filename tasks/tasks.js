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

module.exports = gulp.task('tasks', function() {

  // src
  gulp.src(path.tasks.all)

    // esformatter (https://github.com/millermedeiros/esformatter)
    .pipe(esformatter({
    }))

    // eslint (https://github.com/adametry/gulp-eslint)
    .pipe(eslint())
    .pipe(eslint.format(eslintStylish))

    // dest
    .pipe(gulp.dest(path.tasks.root));

});
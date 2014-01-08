'use strict';

/**
 * Module dependencies
 */

var path = require('../gulpfile');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var esformatter = require('gulp-esformatter');
var eslint = require('gulp-eslint');
var eslintStylish = require ('eslint-stylish');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('modules', function() {

  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src(path.client.modules)

  // browserify (https://github.com/deepak1556/gulp-browserify)
  .pipe(browserify({
    buffer: false,
    debug: true,
  }))

  // esformatter (https://github.com/millermedeiros/esformatter)
  .pipe(esformatter({
    preset: 'default'
  }))

  // eslint (https://github.com/adametry/gulp-eslint)
  .pipe(eslint({
  }))
  .pipe(eslint.format(eslintStylish))

  // uglify (https://github.com/terinjokes/gulp-uglify)
  .pipe(uglify())

  .pipe(gulp.dest(path.build.modules));
});
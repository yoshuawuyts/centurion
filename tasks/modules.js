'use strict';

/**
 * Module dependencies
 */

var path = require('../config.json');
var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var grep = require('gulp-grep-stream');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var debug = require('gulp-debug');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('modules', function() {

  gulp.watch([
    path.modules.src
  ], function(event) {

    gulp.src(path.modules.index)
      .pipe(debug())

      // apply transformations
      .pipe(browserify({
        buffer: false,
        debug: true
      }))
      .pipe(uglify())
      .pipe(rename('scripts.js'))

      // dest
      .pipe(gulp.dest(path.modules.dest));
  });

});
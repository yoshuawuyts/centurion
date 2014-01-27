'use strict';

/**
 * Module dependencies
 */

var path = require('./config.json');
var gulp = require('gulp');
var watch = require('gulp-watch');
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

  gulp.src(path.modules.src)
    .pipe(watch(function(files) {
    return files
    .pipe(grep('**/index.js'))
    .pipe(debug())
    .pipe(browserify({
      buffer: false,
      debug: true
    }))
    .pipe(rename(path.modules.rename))
    .pipe(gulp.dest(path.modules.dest));
  }));

});
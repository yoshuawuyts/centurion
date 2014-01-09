'use strict';

/**
 * Module dependencies
 */

var path = require('../gulpfile');
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('modules', function() {

  // src
  gulp.src(path.client.modules)

    // browserify (https://github.com/deepak1556/gulp-browserify)
    .pipe(browserify({
      buffer: false,
      debug: true
    }))

    // uglify (https://github.com/terinjokes/gulp-uglify)
    .pipe(uglify())

    // rename
    .pipe(rename('scripts.js'))

    // dest
    .pipe(gulp.dest(path.build.modules));

});
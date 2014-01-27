'use strict';

/**
 * Module dependencies
 */

var path = require('./config.json');
var gulp = require('gulp');
var concat = require('gulp-concat');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('vendor', function() {
  gulp.src(path.vendor.src)

    // concat, rename, write
    .pipe(gulp.dest(path.vendor.dest));
});
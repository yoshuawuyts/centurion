'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('../gulpfile');
var uglify = require('gulp-uglify');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('modules', function() {

  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src(path.client.modules)
    .pipe(uglify())
    .pipe(gulp.dest(path.build.modules));

  // Copy vendor files
  gulp.src(path.client.vendor)
    .pipe(gulp.dest(path.build.vendor));
});
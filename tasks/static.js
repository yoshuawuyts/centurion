'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('../gulpfile');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('static', function() {

  // fonts
  gulp.src(path.client.fonts)
    .pipe(gulp.dest(path.build.fonts));

  // images
  gulp.src(path.client.images)
    .pipe(gulp.dest(path.build.images));

});
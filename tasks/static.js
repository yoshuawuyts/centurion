'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('./config.json');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('static', function() {

  // fonts
  gulp.src(path.fonts.src)
    .pipe(gulp.dest(path.fonts.dest));

  // images
  gulp.src(path.images.src)
    .pipe(gulp.dest(path.images.dest));

  // index.html
  gulp.src(path.html.src)
    .pipe(gulp.dest(path.html.dest));

});
'use strict';

// require modules
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var path = require('../gulpfile');

module.exports = gulp.task('modules', function() {

    // Minify and copy all JavaScript (except vendor scripts)
    gulp.src(path.client.modules)
      .pipe(uglify())
      .pipe(gulp.dest(path.build.modules));

    // Copy vendor files
    gulp.src(path.client.vendor)
      .pipe(gulp.dest(path.build.vendor));
  });
'use strict';

/**
 * Module dependencies
 */

var path = require('../gulpfile');
var gulp = require('gulp');
var rename = require('gulp-rename');
var rework = require('gulp-rework');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var npm = require('rework-npm');
var vars = require('rework-vars');
var breakpoints = require('rework-breakpoints');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('styles', function() {

  // src
  gulp.src(path.client.styles)

  // rework (https://github.com/sindresorhus/gulp-rework)
  .pipe(rework(
    npm(),            // @import (https://github.com/conradz/rework-npm)
    rework.colors(),  // dynamic colors (https://github.com/reworkcss/rework#colors)
    rework.extend(),  // class extensions (https://github.com/reworkcss/rework#extend)
    // breakpoints(),    // better breakpoints (https://github.com/reworkcss/rework-breakpoints)
    vars(),           // variables (https://github.com/reworkcss/rework-vars)
    {sourcemap: true}
  ))

  // autoprefixer (https://github.com/Metrime/gulp-autoprefixer)
  .pipe(autoprefixer("last 2 versions", "> 1%", "ie 10"))

  // csso (https://github.com/ben-eb/gulp-csso)
  .pipe(csso())

  // rename file
  .pipe(rename("styles.css"))

  // dest
  .pipe(gulp.dest(path.build.styles));

});
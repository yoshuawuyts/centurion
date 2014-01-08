'use strict';

/**
 * Module dependencies
 */

var path = require('../gulpfile');
var gulp = require('gulp');
var rework = require('gulp-rework');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var npm = require('rework-npm');
var vars = require('rework-vars');
var calc = require('rework-calc');
var mixins = require('rework-mixins');
var whitespace = require('css-whitespace');

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
    npm(),              // @import (https://github.com/conradz/rework-npm)
    whitespace(),       // significant whitespace (https://github.com/reworkcss/css-whitespace)
    mixins(),           // mixins (https://github.com/visionmedia/rework-mixins)
    calc(),             // calculate values (https://github.com/reworkcss/rework-calc)
    rework.colors(),    // dynamic colors (https://github.com/reworkcss/rework#colors)
    rework.extend(),    // class extensions (https://github.com/reworkcss/rework#extend)
    vars(),             // variables (https://github.com/reworkcss/rework-vars)
    {sourcemap: true}   // source maps
  ))

  // autoprefixer (https://github.com/Metrime/gulp-autoprefixer)
  .pipe(prefix("last 2 versions", "> 1%", "ie 10"))

  // csso (https://github.com/ben-eb/gulp-csso)
  .pipe(csso())

  // dest
  .pipe(gulp.dest(path.build.styles));

});
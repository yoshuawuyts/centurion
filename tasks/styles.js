'use strict';

/**
 * Module dependencies
 */

var path = require('../config.json');
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

  gulp.src(path.styles.index)

    .pipe(rework(
    npm(), // future spec
    vars(), // enhancements
    rework.colors(), rework.extend(), breakpoints))

    // prefix, optimize, rename
    .pipe(autoprefixer("last 2 versions", "> 1%", "ie 10"))
    .pipe(csso())
    .pipe(rename(path.styles.rename))

    // dest
    .pipe(gulp.dest(path.styles.dest));

});
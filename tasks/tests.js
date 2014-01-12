'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('../config.json');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var mocha = require('gulp-mocha');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('tests', function() {

  gulp.src(path.tests.index)

    // run tests
    .pipe(mocha());

});
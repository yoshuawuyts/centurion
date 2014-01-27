'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('./config.json');
var debug = require('gulp-debug');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
var mocha = require('gulp-mocha');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('tests', function() {

  gulp.src(path.tests.src)

    // run tests
    .pipe(mocha({
    ui: 'bdd',
    reporter: 'dot',
    globals: []
  }));

});
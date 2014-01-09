'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('../gulpfile');
var mocha = require('gulp-mocha');
var esformatter = require('gulp-esformatter');
var eslint = require('gulp-eslint');
var eslintStylish = require('eslint-stylish');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('tests', function() {

  gulp.src(path.tests.integration)

    // run tests
    .pipe(mocha());

});
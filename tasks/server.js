'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('./config.json');
var nodemon = require('gulp-nodemon');

/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('server', function() {

  // src
  nodemon({
    options: '',
    scripts: path.api.index
  });

});
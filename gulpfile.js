'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');

/**
 * Export directory paths
 *
 * @api public
 */

module.exports = {
  api: ['api/**', 'api/**/**', 'api/**/**/**', 'api/**/**/**/**', 'api/**/**/**/**/**'],
  build: {
    all: 'build/',
    fonts: 'build/fonts',
    images: 'build/images',
    modules: 'build/js',
    styles: 'build/styles',
    vendor: 'build/vendor'
  },
  client: {
    all: 'client/**',
    fonts: 'client/fonts/**',
    images: 'client/images/**',
    modules: ['client/modules/**/*.js', '!client/vendor/**'],
    styles: 'client/styles/**',
    vendor: 'client/vendor'
  },

  tasks: 'tasks/*.js',
  tests: ['tests/*.js', 'tests/**/*.js']
}

/**
 * Import tasks
 */

require('./tasks/modules'); // browserify, esformatter, eslint
require('./tasks/server');  // nodemon, node-inspector
require('./tasks/static');  // copy fonts + images
require('./tasks/styles');  // resin
require('./tasks/tests');   // mocha
require('./tasks/watch');   // watch, livereload

/**
 * Default task
 */

gulp.task('default', function() {
  gulp.run( 
    'modules',
    'static',
    'styles',
    'tests'
  );
  gulp.run(
    'server',
    'watch'
  );
});
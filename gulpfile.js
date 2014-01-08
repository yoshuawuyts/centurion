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
  api: {
    all: ['api/*.js', 'api/**/*.js', 'api/**/**/*.js', 'api/**/**/**/*.js', 'api/**/**/**/**/*.js'],
    index: 'api/index.js',
    root: 'api/'
  },
  build: {
    all: 'build/',
    fonts: 'build/fonts',
    images: 'build/images',
    modules: 'build/js',
    styles: 'build/styles',
    vendor: 'build/vendor'
  },
  client: {
    all: ['client/**', 'client/**/**'],
    fonts: 'client/fonts/**',
    images: ['client/images/**', 'client/images/**/**'],
    modules: 'client/modules/index.js',
    styles: 'client/styles/index.css',
    vendor: 'client/vendor'
  },

  tasks: {
    all: 'tasks/*.js',
    root: 'tasks/'
  },

  tests: ['tests/*.js', 'tests/**/*.js']
}

/**
 * Import tasks
 */

require('./tasks/api');     // esformatter, eslint
require('./tasks/modules'); // browserify, esformatter, eslint, uglify
require('./tasks/server');  // nodemon
require('./tasks/static');  // copy fonts + images
require('./tasks/styles');  // rework, autoprefixer, csso
require('./tasks/tasks');   // esformatter, eslint
require('./tasks/tests');   // mocha
require('./tasks/watch');   // watch, livereload

/**
 * Default task
 */

gulp.task('default', function() {
  gulp.run( 
    'api',
    'modules',
    'static',
    'styles',
    'tasks',
    'tests'
  );
  gulp.run(
    'server',
    'watch'
  );
});
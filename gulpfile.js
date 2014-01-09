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
    src: ['api/*.js', 'api/**/*.js', 'api/**/**/*.js', 'api/**/**/**/*.js', 'api/**/**/**/**/*.js'],
    cwd: 'api/',
    tests: 'api/test.js',
    index: 'api/index.js'
  },
  fonts: {
    src: 'client/fonts/**',
    dest: 'build/fonts'
  },
  images: {
    src: 'client/images/**',
    dest: 'build/images/'
  },
  modules: {
    src: ['client/modules/*.js', 'client/modules/**/*.js', 'client/modules/**/**/*.js', 'client/modules/**/**/**/*.js', 'client/modules/**/**/**/**/*.js'],
    cwd: 'client/modules/',
    dest: 'build/modules',
    index: 'client/modules/index.js'
  },
  styles: {
    src: ['client/styles/*.css', 'client/styles/**/*.css', 'client/styles/**/**/*.css'],
    cwd: 'client/styles/',
    dest: 'build/styles',
    index: 'client/styles/index.css',
  },
  tasks: {
    src: 'tasks/*.js',
    cwd: 'tasks/'
  },
  tests: {
    src: ['tests/*.js', 'tests/**/*.js', 'tests/**/**/*.js'],
    cwd: 'tests/',
    index: 'tests/test.js'
  }
}

/**
 * Import tasks
 */

require('./tasks/lint');    // esformatter, eslint
require('./tasks/modules'); // browserify, uglify
require('./tasks/server');  // nodemon
require('./tasks/static');  // copy fonts + images
require('./tasks/styles');  // rework, autoprefixer, csso
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
    'lint',
    'tests'
  );
  gulp.run(
    'server',
    'watch'
  );
});
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
    root: 'api/',
    tests: 'api/test.js'
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
    tests: 'client/modules/tests.js',
    vendor: 'client/vendor'
  },

  lint: {
    api: {
      src: ['api/*.js', 'api/**/*.js', 'api/**/**/*.js', 'api/**/**/**/*.js', 'api/**/**/**/**/*.js'],
      dest: 'api/'
    },
    modules: {
      src: ['client/modules/*.js', 'client/modules/**/*.js', 'client/modules/**/**/*.js', 'client/modules/**/**/**/*.js', 'client/modules/**/**/**/**/*.js'],
      dest: 'client/modules/'
    },
    tasks: {
      src: 'tasks/*.js',
      dest: 'tasks/'
    },
    tests: {
      src: ['tests/*.js', 'tests/**/*.js', 'tests/**/**/*.js'],
      dest: 'tests/'
    }
  },

  tasks: {
    all: 'tasks/*.js',
    root: 'tasks/'
  },

  tests: {
    integration: 'tests/test.js',
    root: 'tests/'
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
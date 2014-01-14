'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');

/**
 * Import tasks
 */

require('./tasks/lint');    // esformatter, eslint
require('./tasks/modules'); // browserify, uglify
require('./tasks/server');  // nodemon
require('./tasks/static');  // copy fonts + images
require('./tasks/styles');  // rework, autoprefixer, csso
require('./tasks/tests');   // mocha
require('./tasks/vendor');   // concat

/**
 * Default task
 */

gulp.task('default', function() {
  gulp.run( 
    'vendor',
    'modules',
    'static',
    'styles',
    'lint',
    'tests' 
  );
  gulp.run(
    'server'
  );
});
'use strict';

/**
 * Module dependencies
 */

var gulp = require('gulp');
var path = require('../gulpfile');


/**
 * Expose 'gulp.task'
 *
 * @api public
 */

module.exports = gulp.task('watch', function() {

  // api
  gulp.src(path.api.src, function(event) {
    gulp.run('lint', 'tests');
  });

  // modules
  gulp.watch(path.modules.src, function(event) {
    gulp.run('modules', 'lint', 'tests');
  });

  // static
  gulp.watch([path.images.src, path.fonts.src], function(event) {
    gulp.run('static');
  });

  // tasks
  gulp.watch(path.tasks.src, function(event) {
    gulp.run('lint');
  });

  // tests
  gulp.watch(path.tests.src, function(event) {
    gulp.run('lint', 'tests');
  });

});
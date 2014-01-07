'use strict';

// require plugins
var gulp = require('gulp');
var uglify = require('gulp-uglify');

// define paths
var path = {
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

// define tasks
gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src(path.client.modules)
    .pipe(uglify())
    .pipe(gulp.dest(path.build.modules));

  // Copy vendor files
  gulp.src(path.client.vendor)
    .pipe(gulp.dest(path.build.vendor));
});

// Copy all static assets
gulp.task('copy', function() {
  gulp.src(path.client.images)
    .pipe(gulp.dest(path.build.images));

  gulp.src(path.client.styles)
    .pipe(gulp.dest(path.build.styles));
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('scripts', 'copy');

  // Watch files and run tasks if they change
  gulp.watch(path.client.modules, function(event) {
    gulp.run('scripts');
  });

  gulp.watch([
    path.client.images,
    path.client.styles
  ], function(event) {
    gulp.run('copy');
  });
});
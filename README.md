# Centurion [![NPM version](https://badge.fury.io/js/centurion.png)](http://badge.fury.io/js/centurion) [![Dependency Status](https://david-dm.org/yoshuawuyts/centurion.png?theme=shields.io)](https://david-dm.org/yoshuawuyts/centurion) 

> A tiny [gulp](https://github.com/gulpjs/gulp) configuration

## Installation
````npm i --save-dev centurion````

## Commands
````
lint    // esformatter, eslint
modules // browserify, uglify
server  // nodemon
static  // copy fonts + images
styles  // rework, autoprefixer, csso
tests   // mocha
````

## Config
__gulpfile.js__
````js
'use strict';

/**
 * Module dependencies
 */

var gulpUtil = require('gulp-util');
var path = require('centurion');

// use centurion

try {
  require(path.resolve(__dirname, gulpUtil.env.gulpfile));
} catch (err) {
  console.error('Unable to load %s', gulpUtil.env.gulpfile);
}
````

## License
MIT © [Yoshua Wuyts](yoshuawuyts.com)

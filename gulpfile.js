var gulp = require('gulp');
var mocha = require('gulp-mocha');
var exit = require('gulp-exit');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var app = require('./app');

gulp.task('test-once', function() {
  return gulp.src('test/**/**/*.js', {read: false})
             .pipe(mocha({reporter: 'nyan'}))
             .pipe(exit());
});

gulp.task('lint', function() {
  return gulp.src(['./app.js', './config/**/*.js', './test/**/*',
    'app/**/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

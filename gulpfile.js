/**
 * Created by haakonkaurel on 25/05/15.
 */

var gulp = require('gulp'),
    gls = require('gulp-live-server'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

gulp.task('copy', [], function () {
    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('browserify', function() {
    gulp.src(['./angularjs/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('default', ['copy', 'browserify'], function () {
    var server = gls.new('app.js');
    server.start();
});

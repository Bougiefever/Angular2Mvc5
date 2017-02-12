/// <binding BeforeBuild='compile' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var clean = require("gulp-clean");
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compile', function () {
    return gulp.src('app/**/*.ts')
            .pipe(sourcemaps.init())
        .pipe(tsProject.src())
            .pipe(tsProject())
            .js
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest('app/'));
});

gulp.task('clean',
    function () {
        return gulp.src(["app/**/*.js", "app/**/*.map"]).pipe(clean());
    });
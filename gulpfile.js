var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');
var concat = require('gulp-concat');

gulp.task('less', function () {
    return gulp.src('./css/less/style.less')  // only compile the entry file
        .pipe(less({
            paths: ['./']
        }))
        .pipe(autoprefixer("last 3 version"), {cascade: true})
        .pipe(gulp.dest('./src/components/'))
});

gulp.task('cssminify', function () {
    gulp.src('./css/build/style.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/components/'));
});

gulp.task('watch', function () {
    gulp.watch('./css/less/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task
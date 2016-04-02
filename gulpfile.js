'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src(['scss/**/*.scss'])
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
    }
  }))
  .pipe(sass())
  .pipe(gulp.dest('./css/'));
});

gulp.task('default', function () {
	gulp.watch('scss/**/*.scss', ['styles']);
});

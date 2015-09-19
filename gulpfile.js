var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watchout', function () {
  gulp.watch('sass/*.scss', ['sass'])
})

gulp.task('default', ['sass', 'watchout'])

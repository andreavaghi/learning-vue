const gulp = require('gulp');
const connect = require('gulp-connect');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');

gulp.task('connect', () => {
  connect.server({
    port: 4000,
    livereload: true
  });
});

gulp.task('html', () => {
  gulp.src('*.html')
    .pipe(jshint.extract('auto'))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['*.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);

const gulp        = require('gulp');
const browserSync = require('browser-sync');
const uglify      = require('gulp-uglify');
const rename      = require('gulp-rename');
const usemin      = require('gulp-usemin');
const cssmin      = require('gulp-cssmin');
const sourcemaps  = require('gulp-sourcemaps');
const del         = require('del');

gulp.task('clean', function(done) {
  del(['dist', 'server']).then(function () {
    done();
  });
});

gulp.task('lib', function(done) {
  return gulp.src('lib/angular-sweetalert2.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename('angular-sweetalert2.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', gulp.series('clean', 'lib'));

gulp.task('usemin', function(done) {
  return gulp.src('test/index.html')
    .pipe(usemin({
      js: [uglify()],
      css: [cssmin()]
    }))
    .pipe(gulp.dest('server'))
});

gulp.task('browser-sync', function(done) {
  browserSync.init({
    server: {
      baseDir: ['server']
    },
    port: 3000
  });

  gulp.watch('lib/angular-sweetalert2.js', gulp.series('lib', 'usemin', browserSync.reload));
  gulp.watch('test/*.js', gulp.series('usemin', browserSync.reload));
  gulp.watch('test/index.html').on('change', browserSync.reload);
});

gulp.task('server', gulp.series('lib', 'usemin', 'browser-sync'));

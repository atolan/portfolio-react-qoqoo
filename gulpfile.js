var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('sass', function(){
  return gulp.src('scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream: true}));
});

gulp.task('watch', function(){
  browserSync({
    host: "localhost",
    notify: false,
  });
  gulp.watch('scss/*.scss', gulp.series('sass')); 
  gulp.watch('**/*.php', function(done) {
    browserSync.reload();
    done();
  });
})
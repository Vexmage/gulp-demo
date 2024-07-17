import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass'; // Updated import statement
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import eslint from 'gulp-eslint';

// Set the Sass compiler
const sassCompiler = gulpSass(sass);

// Compile Sass to CSS
gulp.task('styles', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(gulp.dest('dist/css'));
});

// Transpile JavaScript with Babel and minify
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Optimize images
gulp.task('images', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Lint JavaScript files
gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(gulp.dest('src/js')); // Save fixed files
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', gulp.series('styles'));
  gulp.watch('src/js/*.js', gulp.series('lint', 'scripts'));
  gulp.watch('src/images/*', gulp.series('images'));
});

// Default task
gulp.task('default', gulp.series('lint', gulp.parallel('styles', 'scripts', 'images'), 'watch'));

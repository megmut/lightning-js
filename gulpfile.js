const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const browserSync = require('browser-sync').create();
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const coveralls = require('gulp-coveralls');

const sourceFiles = [ './libs/pixi.js/pixi.js', './libs/box2d/Box2D.js', './libs/howler/howler.js', './libs/webfontloader/webfontloader.js', './build/*.js' ];
const destination = './dist/';

const sourceFilesDTS = [
    './typings/globals/pixi.js/index.d.ts',
    './libs/howler/index.d.ts',
    './typings/globals/box2d/index.d.ts',
    './typings/globals/webfontloader/index.d.ts',
    './build/*.d.ts'
];
 
gulp.task('concat', function() {
  return gulp.src(sourceFiles)
    .pipe(concat('lightning.js'))
    .pipe(gulp.dest(destination));
});

gulp.task('concat-dts', function() {
  return gulp.src(sourceFilesDTS)
    .pipe(concat('lightning.d.ts'))
    .pipe(gulp.dest(destination));
});

gulp.task('minify', function() {
  gulp.src('./dist/lightning.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
        exclude: ['tasks'],
    }))
    .pipe(gulp.dest('dist'))
});

/**
 * !! For Development Only !!
 * 
 * 1. Watch all src files
 * 2. Re compile 'build / compile.js'
 * 3. Watch for compile.js change
 * 4. BrowserSync reload on change
 * 5. Watch dev/src changes
 * 6. Re compile games.js
 * 7 BrowserSync reload on change
 */

gulp.task('browserify', function() {
    gulp.src('dev/src/js/main.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(rename('game.js'))
        .pipe(gulp.dest('dev/public/js', {overwrite: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './',
            files: ['./dev/public/index.html']
        },
        open: false
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('dev/src/js/**/*.js', ['browserify']);
    gulp.watch('dev/public/js/game.js').on('change', browserSync.reload);
    gulp.watch('build/compile.js').on('change', browserSync.reload);
});
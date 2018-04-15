var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    minifyCss = require('gulp-minify-css'),
    cleanCSS = require('gulp-clean-css');



// Compile sass
gulp.task('sass', function () {
    gulp.src('styles/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles/css'))
});


// Browser Reload
gulp.task('browser-sync', function() {  
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


// Minify Css
gulp.task('minify-css', ['sass'], function() {
    return gulp.src('styles/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(minifyCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('styles/minCss'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('minJs'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Default Tasks
gulp.task('default', ['sass', 'browser-sync', 'minify-css', 'minify-js'], function () {
    gulp.watch('styles/**/*.scss', ['sass']);
    gulp.watch('js/*.js', ['minify-js']);
    gulp.watch('styles/css/*.css', ['minify-css']);
    gulp.watch('*.html', browserSync.reload);
});


// Run: gulp
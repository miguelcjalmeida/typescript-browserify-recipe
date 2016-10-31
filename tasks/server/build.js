let gulp = require('gulp')
let tsify = require('tsify')
let browserify = require('browserify')
let source = require('vinyl-source-stream')
let buffer = require('vinyl-buffer')
let sourcemaps = require('gulp-sourcemaps')
let notify = require("gulp-notify")

gulp.task('build-server', [], () => {
    return browserify({
        entries: './src/server/main.ts',
        debug: true
    })
    .plugin(tsify)
    .transform('babelify', {extensions: ['.ts', '.tsx']})
    .bundle()
    .on('error', notify.onError({
        message: "Error: <%= error.message %>",
        title: "Failed running browserify"
    }))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./', {sourceRoot: '../'}))
    .pipe(gulp.dest('./dist/server'))
})


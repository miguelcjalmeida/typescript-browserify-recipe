let gulp = require('gulp')
let tsify = require('tsify')
let browserify = require('browserify')
let source = require('vinyl-source-stream')
let buffer = require('vinyl-buffer')
let sourcemaps = require('gulp-sourcemaps')
let uglify = require('gulp-uglify')
let rename = require('gulp-rename')

gulp.task('build-ts', [], () => {
    return browserify({
        entries: './src/main.ts',
        debug: true
    })
    .plugin(tsify)
    .transform('babelify', {extensions: ['.ts', '.tsx']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'))
})


let gulp = require('gulp')

gulp.task('build-html', [], () =>
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist')))

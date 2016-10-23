let gulp = require('gulp')

gulp.task('watch', ['watch-html', 'watch-ts'])

gulp.task('watch-ts', [], () =>
    gulp.watch(['./src/**/*.ts'], ['build-ts']))

gulp.task('watch-html', [], () =>
    gulp.watch(['./src/**/*.html'], ['build-html']))

let gulp = require('gulp')

gulp.task('build', ['clean'], () =>
    gulp.start(['build-html', 'build-ts']))

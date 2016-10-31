let gulp = require('gulp')

gulp.task('watch-server', [], () =>
    gulp.watch(['./src/server/**/*.ts'], ['build-server']))
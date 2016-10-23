let gulp = require('gulp')
let gls = require('gulp-live-server')

gulp.task('serve', [],
    () => gls.static('./dist').start())

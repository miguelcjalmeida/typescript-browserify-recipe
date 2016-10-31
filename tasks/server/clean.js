let gulp = require('gulp')
let del = require('del')

gulp.task('clean-server', [], () => del('./dist/server'))
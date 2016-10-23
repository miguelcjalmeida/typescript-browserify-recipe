let gulp = require('gulp')
let requireDir = require('require-dir')

requireDir('./tasks')

gulp.task('default', ['build'])
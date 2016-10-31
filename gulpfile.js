let gulp = require('gulp')
let requireDir = require('require-dir')

requireDir('./tasks')
requireDir('./tasks/server')
requireDir('./tasks/client')

gulp.task('default', ['build'])
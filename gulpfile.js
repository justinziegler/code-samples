var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

function html() {
    gulp.task('default', function () {
    return gulp.src('src/client/views/*.html')
        .pipe(nunjucksRender({
        path: ['src/client/views/'] // String or Array
        }))
        .pipe(gulp.dest('dist'));
    });
}

exports.build = series(html)
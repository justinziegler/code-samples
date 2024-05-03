var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

module.exports.build = function build() {
    gulp.task('default', function () {
        return gulp.src('src/client/views/*.html')
            .pipe(nunjucksRender({
            path: ['src/client/views/'] // String or Array
            }))
            .pipe(gulp.dest('dist'));
    });
}


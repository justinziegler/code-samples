const { src, dest, series, watch } = require('gulp')
const del = import('del')
const njk = require('gulp-nunjucks-render')
const beautify = require('gulp-beautify')

function clean() {
    return del(['dist'])
}

function html() {
    return src('src/client/views/*.+(html|njk)')
        .pipe(
            njk({
                path: ['src/html'],
            })
        )
        .pipe(beautify.html({ indent_size: 4, preserve_newlines: false }))
        .pipe(dest('dist'))
}

function watchFiles() {
    watch('src/html/**/*', html)
}

exports.build = series(clean, html)
exports.default = series(clean, html, watchFiles)
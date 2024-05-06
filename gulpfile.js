var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

function copyAssets() {
    return gulp.src(['src/client/assets/**/*'])
        .pipe(gulp.dest('./build/client/assets/')) ;
}

function copyLib() {
    return gulp.src('src/lib/**/*')
        .pipe(gulp.dest('./build/lib/'));
}

function copyServer() {
    return gulp.src('src/server/**/*')
        .pipe(gulp.dest('./build/server/'));
}

// function copyModules() {
//     return gulp.src('./node_modules/**/*')
//         .pipe(gulp.dest('./build/node_modules/'));
// }

function copyViews() {
    return gulp.src('src/client/views/*.html')
        // .pipe(nunjucksRender({
        //     path: 'src/client/views/' // String or Array
        // }))
        .pipe(gulp.dest('.build/client/views/'));
}

function copyPackageJson() {
    return gulp.src("package.json").pipe(gulp.dest("./build"));
}

function moveAssetsCorrectly() {
    return gulp.src('./build/client/views/assets/*').pipe(gulp.dest("./build/client/assets/"));
}

// module.exports.build = async function () {
//     gulp.task('default', function () {
//         return gulp.src('src/client/views/*.html')
//             .pipe(nunjucksRender({
//                 path: ['src/client/views/'] // String or Array
//             }))
//             .pipe(gulp.dest('build/client/views/'));
//     });
// }


exports.build = gulp.series(copyAssets, copyLib, copyServer, copyViews, copyPackageJson, moveAssetsCorrectly);
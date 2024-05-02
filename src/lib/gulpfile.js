// import gulp from 'gulp';
const gulp = require('gulp');
// const gulpNunjucks = require('gulp-nunjucks');
import {nunjucksCompile} from 'gulp-nunjucks';

// module.exports.getUpsells = async function (items, ctx) {
module.exports.gulpFile = (
	gulp.src('views/01_holiday_mode.html')
		.pipe(nunjucksCompile({name: 'Sindre'}))
		.pipe(gulp.dest('build'))
);
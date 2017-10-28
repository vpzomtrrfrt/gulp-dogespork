var gulp = require('gulp');

var dogescript = require('gulp-dogescript');

gulp.task('default', function() {
	return gulp.src('src/**/*.djs')
	.pipe(dogescript())
	.pipe(gulp.dest('dist'));
});

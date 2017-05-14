var gulp = require('gulp'),
browserSync = require('browser-sync'),
concat = require('gulp-concat'),
uglify = require('gulp-uglifyjs'),
cssnano = require('gulp-cssnano'),
rename = require('gulp-rename'),
del = require('del'),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant'),
cache = require('gulp-cache'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
less = require('gulp-less'),
jsmin = require('gulp-jsmin');


gulp.task('less', function() {
	return gulp.src('app/less/**/*.less')
	.pipe(less())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
})

gulp.task('scripts_concat', function() {
	return gulp.src(['app/js/burger.js','app/js/slider.js', 'app/js/loginForm.js'])
	.pipe(concat('style.js'))
	.pipe(gulp.dest('app/js'));
});

gulp.task('scripts', ['scripts_concat'], function () {
	gulp.src('app/js/style.js')
	.pipe(jsmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['less'], function() {
	return gulp.src(['app/css/style.css', 'app/css/normalize.css'])
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('clear', function() {
	return cache.clearAll();
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	/*.pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))*/
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['sync', 'css-libs', 'scripts'], function() {
	gulp.watch('app/less/**/*.less', ['less']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'less', 'scripts'], function() {

	var buildCss = gulp.src('app/css/style.min.css')
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildMusic = gulp.src('app/music/*')
	.pipe(gulp.dest('dist/music'));

	var buildVideo = gulp.src('app/video/*')
	.pipe(gulp.dest('dist/video'));

	var buildJs = gulp.src('app/js/**/*.min.js')
	.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));

});
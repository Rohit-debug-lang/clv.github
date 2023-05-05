var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
var cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


/*******************  LTR   ******************/


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling scss in assets.');
	 return gulp.src('Edomi/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('Edomi/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})



//_______task for color
gulp.task('color', function(){
   return gulp.src('Edomi/assets/color-skins/color.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(beautify.css({ indent_size: 4 }))	
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Edomi/assets/color-skins'));
		
})







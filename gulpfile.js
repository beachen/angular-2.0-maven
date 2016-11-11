const gulp = require('gulp');
const del = require('del');

// Clean libs in lib folder
gulp.task('clean', function () {
  return del('lib');
});

// Copy dependencies to libs
gulp.task('copy:libs', ['clean'], function() {
	
	console.log("Copy js files");
	
	gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
	  'node_modules/reflect-metadata/Reflect.js',
	  'node_modules/systemjs/dist/system.src.js'
	  
    ])
    .pipe(gulp.dest('target/lib'));
	
	// Bundels - just take the js files
	console.log("Copy @angular bundles");
	gulp.src('node_modules/@angular/**/*.js')
	.pipe(gulp.dest('target/lib/@angular/'));  

	// rxjs
	console.log("Copy rxjs bundles");
	gulp.src(
			'node_modules/rxjs/**/*.js')
	.pipe(gulp.dest('target/lib/rxjs/'));  
});


 

   
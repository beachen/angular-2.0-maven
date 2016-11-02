const gulp = require('gulp');
const del = require('del');

// Clean libs in lib folder
gulp.task('clean', function () {
  return del('lib');
});

// Copy dependencies to libs
gulp.task('copy:libs', ['clean'], function() {
	
	console.log("This is the gulp phase and reallly cools stuff can be made..");
	
	gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
	  'node_modules/reflect-metadata/Reflect.js',
	  'node_modules/systemjs/dist/system.src.js'
//	  ,
//	  'node_modules/@angular/**/*.js',
//	  'node_modules/rxjs/**/*.js'
	  
	   // Bundles
//	  'node_modules/@angular/core/bundles/core.umd.js',
//	  'node_modules/@angular/common/bundles/common.umd.js',
//      'node_modules/@angular/compiler/bundles/compiler.umd.js',
//      'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
//      'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
//      'node_modules/@angular/http/bundles/http.umd.js',
//      'node_modules/@angular/router/bundles/router.umd.js',
//      'node_modules/@angular/forms/bundles/forms.umd.js'
	  
	  
	  
    ])
    .pipe(gulp.dest('lib'));
	
	// Bundels - just take the js files
	gulp.src('node_modules/@angular/**/*.js')
	.pipe(gulp.dest('lib/@angular/'));  // Writes 'build/somedir/somefile.js'

	gulp.src('node_modules/rxjs/**/*.js')
	.pipe(gulp.dest('lib/rxjs/'));  // Writes 'build/js/somedir/somefile.js'
	
});


 

   
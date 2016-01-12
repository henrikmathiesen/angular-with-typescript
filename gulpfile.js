var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourceMaps = require('gulp-sourcemaps');
var concatJs = require('gulp-concat');
var uglifyJs = require('gulp-uglify');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');


//
// Use tsconfig file (*that VS Code likes for its code features (go to symbol for example)) as source for the ts task
// * https://code.visualstudio.com/Docs/languages/typescript
//
var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean-bld', function () {
    del.sync('bld');
});

gulp.task('default', ['clean-bld'], function() {
	var tsResult = tsProject.src()
        .pipe(sourceMaps.init())
        .pipe(ts(tsProject));
	
	return tsResult.js
        .pipe(concatJs('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglifyJs())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('bld'));
});
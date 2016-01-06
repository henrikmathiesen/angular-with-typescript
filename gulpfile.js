var gulp = require('gulp');
var ts = require('gulp-typescript');

//
// Use tsconfig file (*that VS Code likes for its code features (go to symbol for example)) a source for the ts task
// * https://code.visualstudio.com/Docs/languages/typescript
//
var tsProject = ts.createProject('tsconfig.json');


gulp.task('ts', function() {
	var tsResult = tsProject.src().pipe(ts(tsProject));
	
	return tsResult.js.pipe(gulp.dest('bld/js'));
});
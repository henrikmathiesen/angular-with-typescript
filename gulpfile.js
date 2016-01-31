var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourceMaps = require('gulp-sourcemaps');
var concatJs = require('gulp-concat');
var uglifyJs = require('gulp-uglify');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');

var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');


//
// Use tsconfig file (*that VS Code likes for its code features (go to symbol for example)) as source for the ts task
// * https://code.visualstudio.com/Docs/languages/typescript
//
var tsProject = ts.createProject('tsconfig.json');
var lessSrc = 'app/main/main.less';
var lessSrcWatch = 'app/**/*.less';
var tsSrcWatch = 'app/**/*.ts';
var buildFolder = 'bld';

gulp.task('clean-bld', function () {
    del.sync('bld');
});

gulp.task('less', function(){
    return gulp
        .src(lessSrc)
        .pipe(sourceMaps.init())
        .pipe(less())
        .pipe(autoprefix({ browsers: ['last 3 versions'] }))
        .pipe(minifyCss())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(buildFolder));
});

gulp.task('ts', function(){
    var tsResult = tsProject.src()
        .pipe(sourceMaps.init())
        .pipe(ts(tsProject));
	
	return tsResult.js
        .pipe(concatJs('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglifyJs())
        .pipe(sourceMaps.write())
        .pipe(gulp.dest(buildFolder));
});

gulp.task('default', ['clean-bld', 'ts', 'less'], function() {
	
});

gulp.task('watch', ['default'], function(){
    gulp.watch(tsSrcWatch, ['ts']);
    gulp.watch(lessSrcWatch, ['less']);
});
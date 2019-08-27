const gulp = require ('gulp');
const clean = require ('gulp-clean');
const ts = require ('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function scripts (cb){
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js
        .pipe(gulp.dest('dist'));
};

function static (cb){
    return gulp
        .src('src/**/*.json')
        .pipe(gulp.dest('dist'));
};

function cleans (cb){
    return gulp
        .src('dist')
        .pipe(clean());
};

function watcher (cb){
    return gulp
        .watch(['src/**/*.ts','src/**/*.json'], gulp.series('build'));
};
gulp.task('build', gulp.series(cleans, static, scripts));
gulp.task('default', gulp.series(watcher));

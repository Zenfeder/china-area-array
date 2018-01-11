const gulp = require('gulp')
const uglify = require('gulp-uglify')

gulp.task('uglify-js', function(){
    return  gulp.src(['dist/china-area-array.js'])
            .pipe(uglify())
            .pipe(gulp.dest('dist'));
});
//默认任务，命令行中键入"gulp"并按下回车键便可运行
gulp.task('default',function(){
    gulp.start('uglify-js');
}); 

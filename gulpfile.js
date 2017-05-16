/**
 * Created by bin on 2017/5/16.
 */

var gulp = require("gulp");
var less = require("less");
var $ = require('gulp-load-plugins')();//加载插件
var cleancss = require("gulp-clean-css");//压缩CSS文件
var concat = require("gulp-concat");//
var browserSync = require('browser-sync').create();//自动化部署操作
var notify = require('gulp-notify');//提示信息

/*把less文件编译成css文件并且压缩*/
gulp.task('less', function () {
    return gulp.src('APP/style/*.less')
        .pipe($.less())
        .pipe(cleancss())//压缩css文件
        .pipe(gulp.dest('dist/css'));
});
/*压缩JS文件*/
gulp.task("concatjs",function () {
    return gulp.src("APP/js/*.js")
        .pipe(concat("all.js"))
        .pipe(gulp.dest("dist/js/"))
})
/*压缩图片*/
gulp.task('images', function() {
    return gulp.src('APP/img/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({ message: 'Images task complete' }));
});

/*复制文件*/
gulp.task("copy",function () {
    /*复制文件*/
    gulp.src("APP/index.html")//找到一个文件
        .pipe(gulp.dest("dist/"))//在此处将需要执行的操作传递过去
});

/*启动服务*/
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./APP"
        }
    });
    /*当改变代码自动重新加载网页*/
    gulp.watch("APP/index.html").on("change", browserSync.reload);
});

/*当改变代码的时候无刷新改变网页*/
gulp.task("dist",function () {
    gulp.watch("APP/index.html",['serve']);
    /*当改变less文件的时候自动重新编译less文件*/
    gulp.watch("APP/style/*.less",['less']);//编译和压缩CSS文件
    gulp.watch("APP/js/*.js",["concatjs"]);//压缩JS文件
});
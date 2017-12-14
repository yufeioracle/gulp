'use strict';

const gulp = require("gulp");
const less = require("gulp-less");
const connect = require("gulp-connect");


gulp.task("taskName",function(){
    console.log("yufei");
});

//拷贝文件
gulp.task("dest",function(){
    gulp.src("src/**/*.*")
        .pipe(gulp.dest("dist/"));
});

gulp.task("default",function(){
    console.log("这是默认的任务，直接gulp啦！！");
    gulp.watch("src/*",["dest"]);
});

gulp.task("style",function(){
    gulp.src("src/**/*.less")
    .pipe(less())
    .pipe(gulp.dest("dist/"));
});

gulp.task("watch",function(){
    gulp.watch("src/**/*.less",["style"]);
});

gulp.task("serve",function(){
        //默认是监听8080端口的
        connect.server({
            root: 'public',//是写根目录
            livereload: true,
            port: 8888
        });
        gulp.watch("public/**/*.*",["reload"]);
});

gulp.task("reload",function(){
        gulp.src("public/**/*.*").pipe(connect.reload());
});
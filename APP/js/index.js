/**
 * Created by bin on 2017/5/16.
 */
var menuclick = true;
$("#header-menu").click(function () {
    if(menuclick){
        $("#header-menu-pulldown").css("visibility", "visible");
        menuclick = false;
    }else{
        $("#header-menu-pulldown").css("visibility", "hidden");
        menuclick = true;
    };
});

var n = 0;
var width = window.screen.availWidth;
var step = width/100;
var leftpx = $("#tab-movie").css("margin-left");
var left = parseInt(leftpx);
$("#cinema-label").click(function () {
        // console.info(left);
        if(n < 100){
            n++;
            left -= step;
            $("#tab-movie").css("margin-left",left+"px");
            setTimeout(arguments.callee, 5);
        }else {
            $("#cinema-label").css({"color":"rgba(242,101,34,1)","border-bottom":"2px solid rgba(242,101,34,1)"});
            $("#movie-label").css({"color":"rgba(41, 42, 42, 0.78)","border-bottom":"2px solid rgba(177,181,177,1)"});
        }
});
$("#movie-label").click(function () {
    // console.info(left);
    if(n > 0){
        n--;
        left += step;
        $("#tab-movie").css("margin-left",left+"px");
        setTimeout(arguments.callee, 5);
    }else {
        $("#movie-label").css({"color":"rgba(242,101,34,1)","border-bottom":"2px solid rgba(242,101,34,1)"});
        $("#cinema-label").css({"color":"rgba(41, 42, 42, 0.78)","border-bottom":"2px solid rgba(177,181,177,1)"});
    }
});

// 电影详情-跳转
$("#movie01").click(function () {
    window.location.href = "movie.html";
});
$("#movie02").click(function () {
    window.location.href = "movie.html";
});
$("#movie03").click(function () {
    window.location.href = "movie.html";
});
$("#movie04").click(function () {
    window.location.href = "movie.html";
});
$("#movie05").click(function () {
    window.location.href = "movie.html";
});
$("#willsale01").click(function () {
    window.location.href = "movie.html";
});
$("#willsale02").click(function () {
    window.location.href = "movie.html";
});
$("#willsale03").click(function () {
    window.location.href = "movie.html";
});
$("#willsale04").click(function () {
    window.location.href = "movie.html";
});
$("#willsale05").click(function () {
    window.location.href = "movie.html";
});
/**
 * Created by bin on 2017/5/19.
 */

// 登录标签-切换
$("#cinema-label").click(function () {
        $("#cinema-label").css({"color":"rgba(242,101,34,1)","border-bottom":"2px solid rgba(242,101,34,1)"});
        $("#movie-label").css({"color":"rgba(41, 42, 42, 0.78)","border-bottom":"2px solid rgba(177,181,177,1)"});
    $("#login-acc").css("display","none");
    $("#login-mobile").css("display","block");
    $("#login-submit-help").css("display","none");
});
$("#movie-label").click(function () {
        $("#movie-label").css({"color":"rgba(242,101,34,1)","border-bottom":"2px solid rgba(242,101,34,1)"});
        $("#cinema-label").css({"color":"rgba(41, 42, 42, 0.78)","border-bottom":"2px solid rgba(177,181,177,1)"});
    $("#login-acc").css("display","block");
    $("#login-mobile").css("display","none");
    $("#login-submit-help").css("display","block");
});

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


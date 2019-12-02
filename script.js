var n = 0

$(document).ready(function() {

$(".nav-link").mouseenter(function(){
 $(this).css({"background-color": "#204593", color: "white"});
 });
    
$(".nav-link").mouseleave(function(){
    $(this).css("background-color", "gray");
    
});
    });
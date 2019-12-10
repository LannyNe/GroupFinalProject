var n = 0

$(document).ready(function(){

$(".nav-link").mouseenter(function(){
 $(this).css({"background-color": "#204593", color: "white"});
 });
    
$(".nav-link").mouseout(function(){
    $(this).removeAttr("style");
   });
    
$("#sliding").click(function(){
    $("#scheduleSlide").toggle("slow");
    
});   
    

    
    
});
$(document).ready(function(){
  //all js goes in here
  console.log("we loaded");

  $("#1").mouseover(function(){
    $("#1").css("font-size","40px");
  });
  $("#2").mouseover(function(){
    $("#2").css("font-size","40px");
  });
  $("#3").mouseover(function(){
    $("#3").css("font-size","40px");
  });
  $("#4").mouseover(function(){
    $("#4").css("font-size","40px");
  });
  $("#1").mouseleave(function(){
    $("#1").css("font-size","20.8px");
  });
  $("#2").mouseleave(function(){
    $("#2").css("font-size","20.8px");
  });
  $("#3").mouseleave(function(){
    $("#3").css("font-size","20.8px");
  });
  $("#4").mouseleave(function(){
    $("#4").css("font-size","20.8px");
  });
  $("#p1").mouseover(function(){
    $("#p1").css("color","grey");

  });
  $("#p2").mouseover(function(){
    $("#p2").css("color","grey");

  });
  $("#p3").mouseover(function(){
    $("#p3").css("color","grey");

  });
  $("#p4").mouseover(function(){
    $("#p4").css("color","grey");

  });
  $("#p1").mouseleave(function(){
    $("#p1").css("color","black");

  });
  $("#p2").mouseleave(function(){
    $("#p2").css("color","black");

  });
  $("#p3").mouseleave(function(){
    $("#p3").css("color","black");

  });
  $("#p4").mouseleave(function(){
    $("#p4").css("color","black");
    
  });
});

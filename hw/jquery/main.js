$(document).ready(function(){
  //all js goes in here
  console.log("we loaded");

  $("h2").mouseover(function(){
    $("h2").css("font-size","21px");
  });
  $("h2").mouseleave(function(){
    $("h2").css("background-color","grey");
  });
  $("#button1").click(function(){
    $("#ingredients").show();
  };
  $("#button2").click(function(){
    $("#ingredients").hide();
  };

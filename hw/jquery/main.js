$(document).ready(function(){
  //all js goes in here
  console.log("we loaded");

  $("h2").mouseover(function(){
    $("p").css("font-size","21px");
  });
  $("p").mouseleave(function(){
    $("p").css("background-color","grey");
  });
  $("#button1").click(function(){
    $("#ingredients").show();
  }
  $("#button2").click(function(){
    $("#ingredients").hide();
  } 

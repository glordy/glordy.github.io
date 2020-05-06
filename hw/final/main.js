$(document).ready(function(){
  //all js goes in here
  console.log("we loaded");
  $("h3").mouseover(function(){
    $("h3").css("font-size","40px");
  });
  $("p").mouseover(function(){
    $("p").css("background-color","grey");
  }));

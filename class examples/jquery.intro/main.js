$(document).ready(function(){
  //all js goes in here
  console.log("we loaded");

  $(#title).cick(function(){
    //code that runs when you click on the part of the page that has id="ititle".
    $("#title").css("color", "#f9423a");
    $("#title").css("font-size","500px");
  });
  $("#button1").click(funcion(){
    //stuff we put here will happen when you click button1
    $("#title").removeClass("big-text");
  });
  $("p").mouseover(funcion(){
    $("p").css("font-size","21px");
  });
  $("p").mouseleave(funcion(){
    $("p").css("background-color","yellow");
  });
//  $("#title").css("color", "#bada55");
  //$("#title").css("font-size","125px");
  //$("#title").html("More information #1");
});

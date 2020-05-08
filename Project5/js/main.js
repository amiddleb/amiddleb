$(document).ready(function(){
  $(".tassle").click(function() {
    $(".curtain").toggleClass("curtainUp");
  });
  $(".lamp").click(function(){
    $(".spotlight").toggleClass("lightSwitch");
  });
  $(".lamp2").click(function(){
    $(".spotlight2").toggleClass("lightSwitch");
  });
  $(".lamp3").click(function(){
    $(".spotlight3").toggleClass("lightSwitch");
  });
});

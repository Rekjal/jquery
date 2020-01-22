$(document).ready(function() {
    $("p").click(function() {
        $(this).slideUp();
      });
    $(".clickable").click(function() {
    //   $("#hidden").hide();
    //   $("#hidden").show();
    //   $("#hidden").toggle();
    });
    $(".fade").slideDown(3000, function() {
        $("#walrus-showing").slideDown(1000);
        // $("#walrus-hidden").fadeIn();
      });
      $("h1").css("color", "#0088ff");
      $(".clickable").click(function() {
        $("#animals")text.("Click to learn about the giant sandcastles of this fabulous country!");
      });
    
  });
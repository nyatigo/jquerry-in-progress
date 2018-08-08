$(document).ready(function() {

  // Exercise #5
  $("#hide").click(function() {
    $("img").hide();
  });
  $("#show").click(function() {
    $("img").show();
  });

  //Exercise #6
  $("#toggle").click(function() {
    $("img").toggle();
  });

  // Exercise #9
  $("#fade").click(function() {
    $("img").toggleClass("fade");
    // Bonus #2
      if( $("img").css("opacity") == '0') {
        $("#textChange").text("fade on");
      } else {
        $("#textChange").text("fade off");
      }
  });

  // Exercise #10
  $("img").hover(function() {
    $("img").attr("src", "img/newImage.jpg");
  }, /*Bonus #3 */
  function() {
    $("img").attr("src", "img/exercise5.jpg");
  });
  
  // Exercise #12
  $("#newLi").click(function() {
    $("#list").append("<li>Some Text</li>");

      // Bonus #4
      $("li").hover(function() {
        $(this).css({"font-size" : "40px", "color": "tomato"})
      }, function() {
        $(this).css({"font-size" : "initial", "color": "initial"})
      })

  });

  // Exercise #14
  $("#final").click(function() {
    $("body").append("<div id='overlay'></div>");
  })


  

});

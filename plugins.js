/*global $,jQuery,alert*/
$(document).ready(function () {
  "use strict"
    $(".carousel").carousel(
      {
      interval: 2000
    });

    // Show Color Option Div Whin Click On The Gear

    $(".gear-check").click(function () {
      "use strict"
        $(".color-option").fadeToggle();
    });

    // Change Theme Color On Click

    var colorLi = $(".color-option ul li"),
        scrollButton = $("#scroll-top");
    colorLi
      .eq(0).css("backgroundColor", "#E41B17").end()
      .eq(1).css("backgroundColor", "#E436D5").end()
      .eq(2).css("backgroundColor", "#009AFF").end()
      .eq(3).css("backgroundColor", "#3fd42d").end()
      .eq(4).css("backgroundColor", "yellow")

      colorLi.click(function () {
        "use strict"
        $("link[href*='theme']").attr("href",$(this).attr("data-value"))
      });

      $(window).scroll(function () {
        "use strict"
        if ($(this).scrollTop() >= 700) {
          scrollButton.show();
        } else {
          scrollButton.hide();
        }
        
        scrollButton.click(function () {
          "use strict"
          $("html, body").animate({scrollTop:0},2000)
        });
      });

      

});

$(window).on('load', function () 
{
  $(".loading-overlay .sk-chase").fadeOut(2000,function ()
  {
    $("body").css("overflow", "auto");

    $(this).parent().fadeOut(2000,
      function ()
    {
      $(this).remove();
    })
  });
});






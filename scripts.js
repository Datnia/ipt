$(document).ready(function() {
  $(".col").mouseenter(function() {
    $(".col img").css("opacity", "0");
    $("img", this)
      .css("opacity", ".5")
      .css("transform", "scale(1.1)");
    $(".col .title").css("opacity", ".2");
    $(".title", this).css("opacity", "1");
    $(".title p", this).css("opacity", "1");
  });
  $(".col").mouseleave(function() {
    $(".col img")
      .css("opacity", ".5")
      .css("transform", "scale(1)");
    $(".col .title").css("opacity", "1");
    $(".col-content").fadeOut(300);
    $(".title p", this).css("opacity", "0");
  });
  $("#team .title p").click(function() {
    let x = $(this).parent();
    $(".col img").css("opacity", "0");
    $(this)
      .closest(".title")
      .css("opacity", "0");
    $(x)
      .next(".col-content")
      .fadeIn(300);
  });
  $(window).scroll(function() {
    let navPosition = $("nav").offset().top - $(window).scrollTop();
    if ($(window).scrollTop() > $("#team").offset().top) {
      $("#contact").fadeIn(1500);
    } else {
      $("#contact").fadeOut(50);
    }

    if (navPosition <= 0) {
      $("nav")
        .css("top", "0")
        .css("position", "fixed");
    } else {
      $("nav")
        .css("top", "initial")
        .css("position", "initial");
    }
  });

  let contactHeight = $("#contact").outerHeight(true);
  $("#team").css("margin-bottom", contactHeight);

  $("a[href='#contact']").click(function() {
    $("html, body").scrollTop($(document).height());
  });
});

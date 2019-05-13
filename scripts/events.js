$(document).ready(function() {
  $(".filter button").click(function() {
    var filterValue = $(this).attr("value");
    if (filterValue === "fitness") {
      $(`.${filterValue}`).show();
      $(".conference, .community").hide();
    } else if (filterValue === "conference") {
      $(`.${filterValue}`).show();
      $(".community, .fitness").hide();
    } else if (filterValue === "community") {
      $(`.${filterValue}`).show();
      $(".conference, .fitness").hide();
    } else if (filterValue === "all") {
      $(".conference, .fitness, .community").show();
    }
  });

  $("#index-open").click(function() {
    $(this).fadeOut();

    $("nav li")
      .delay(500)
      .fadeIn();
    $("nav").animate({
      width: "80%"
    });
    $("#logo img")
      .delay(200)
      .fadeTo("slow", 1);
    $("#index-close")
      .delay(500)
      .fadeIn();
  });

  if ($(window).width() <= 850) {
    $("#index-close, #home").click(function() {
      $("#index-close").fadeOut();
      $("#logo img").fadeTo("fast", 0);

      $("nav li").fadeOut(100);
      $("nav").animate({
        width: "0"
      });
      $("#index-open")
        .delay(500)
        .fadeIn();
    });
  }
});

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
});

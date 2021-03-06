$(document).ready(function () {
  AOS.init();

  // $("#info .content").click(function () {
  //   let q = $(this).children("p");
  //   if ($(q).hasClass("show")) {
  //     $(q).removeClass("show");
  //   } else {
  //     $("#info .major .content p").removeClass("show");
  //     $(q).addClass("show");
  //   }
  // });

  $("#info .content p").addClass("show");

  setTimeout(function () {
    $("video").fadeTo(1500, 0.6);
  }, 1500);

  $(".col").mouseenter(function () {
    $(".col img").css("opacity", "0");
    $("img", this).css("opacity", ".5").css("transform", "scale(1.1)");
    $(".col .title").css("opacity", ".2");
    $(".title", this).css("opacity", "1");
    $(".title p", this).css("opacity", "1");
  });
  $(".col").mouseleave(function () {
    $(".col img").css("opacity", ".5").css("transform", "scale(1)");
    $(".col .title").css("opacity", "1");
    $(".col-content").fadeOut(300);
    $(".title p", this).css("opacity", "0");
  });
  $("#team .title p").click(function () {
    let x = $(this).parent();
    $(".col img").css("opacity", "0");
    $(this).closest(".title").css("opacity", "0");
    $(x).next(".col-content").fadeIn(300);
  });

  let contactHeight = $("#contact").outerHeight(true);

  if ($(window).width() <= 768) {
    $(window).scroll(function () {
      if ($(window).scrollTop() > $("#team").offset().top) {
        $("#contact").fadeIn(1500);
      } else {
        $("#contact").fadeOut(50);
      }
    });
  } else {
    $("#team").css("margin-bottom", contactHeight);
    $(window).scroll(function () {
      if ($(window).scrollTop() > $("#team").offset().top) {
        $("#contact").fadeIn(1500);
      } else {
        $("#contact").fadeOut(50);
      }
    });
  }

  if ($(window).width() <= 850 && window.innerHeight < window.innerWidth) {
    $("#events").css("margin-bottom", "0");
  }

  var bannerHeight = $(window).innerHeight();
  if ($(window).width() <= 767) {
    $("header").css("height", bannerHeight);
  }

  if ($(window).width() <= 370) {
    // $("#contact").css("margin-top", -contactHeight);
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() > $("#about").offset().top) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2000,
            easing: "linear",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
      });
    }
  });

  $("a[href='#contact']").click(function () {
    $("html, body").scrollTop($(document).height());
  });

  $("#open").click(function () {
    $("#close").delay(400).fadeIn();
    setTimeout(function () {
      $("header nav ul").animate(
        {
          height: bannerHeight,
          width: "100vw",
          borderRadius: 0,
        },
        100,
        "linear"
      );
    }, 250);
    $("header nav ul").animate(
      {
        height: "100vw",
        width: "100vw",
      },
      250,
      "linear"
    );
  });

  $("#close").click(function () {
    $("#close").fadeOut();

    setTimeout(function () {
      $("header nav ul").animate(
        {
          height: "0",
          width: "0",
          borderRadius: "50%",
        },
        250,
        "linear"
      );
    }, 100);
    $("header nav ul").animate(
      {
        height: "100vw",
        width: "100vw",
        borderRadius: "50%",
      },
      100,
      "linear"
    );
  });

  $(window).resize(function () {
    var i = 0;
    if ($(window).outerWidth() < 1520 && i === 0) {
      i = 1;
    } else if ($(window).outerWidth() <= 1520 && i === 0) {
      location.reload();
      i = 1;
    }
  });
});

window.onorientationchange = function () {
  var orientation = window.orientation;
  switch (orientation) {
    case 0:
    case 90:
    case -90:
      window.location.reload();
      break;
  }
};

// console.log(
//   '%cDeveloped by Dat %cNguyen \n\n%chttps://datnguyen.io',
//   'font-size: 36px;',
//   'color: #01b435; font-size: 36px',
//   'font-size: 24px;'
// );

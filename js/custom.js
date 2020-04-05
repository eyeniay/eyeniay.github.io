(function ($) {
  "use strict";

  // HEADER
  $(".navbar").headroom();
  // HEADER

  // SMOOTHSCROLL
  $(function () {
    $(".nav-link, .custom-btn-link").on("click", function (event) {
      document.getElementById("menuButton").click();
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });
  // SMOOTHSCROLL

  // PROJECT CAROUSEL
  $(".slide-one-item-alt").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    smartSpeed: 1000,
    autoplay: false,
    pauseOnHover: true,
    touchDrag: false,
    mouseDrag: false,
    // onDragged: function(event) {
    //   if (event.relatedTarget["_drag"]["direction"] == "left") {
    //     $(".slide-one-item-alt-text").trigger("next.owl.carousel");
    //   } else {
    //     $(".slide-one-item-alt-text").trigger("prev.owl.carousel");
    //   }
    // }
  });
  $(".slide-one-item-alt-text").owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 0,
    smartSpeed: 1000,
    autoplay: false,
    pauseOnHover: true,
    touchDrag: false,
    mouseDrag: false,
    // onDragged: function(event) {
    //   if (event.relatedTarget["_drag"]["direction"] == "left") {
    //     $(".slide-one-item-alt").trigger("next.owl.carousel");
    //   } else {
    //     $(".slide-one-item-alt").trigger("prev.owl.carousel");
    //   }
    // }
  });

  $(".custom-next").click(function (e) {
    e.preventDefault();
    $(".slide-one-item-alt").trigger("next.owl.carousel");
    $(".slide-one-item-alt-text").trigger("next.owl.carousel");
  });
  $(".custom-prev").click(function (e) {
    e.preventDefault();
    $(".slide-one-item-alt").trigger("prev.owl.carousel");
    $(".slide-one-item-alt-text").trigger("prev.owl.carousel");
  });
  // PROJECT CAROUSEL
})(jQuery);

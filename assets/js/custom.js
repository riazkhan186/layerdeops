(function ($) {
  "use strict";
  $(".hero-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
  });
})(jQuery);

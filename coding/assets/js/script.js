$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var fv = $(".fv");

  if (fv.length > 0) {
    var scrollPosition = fv.position().top + fv.outerHeight(true);
  }

  if (scroll > scrollPosition) {
    $(".header_container").addClass("active");
  } else {
    $(".header_container").removeClass("active");
  }
});

$(window).load(function () {
  $(".hamburger").click(function () {
    $("#menu").toggleClass("active");
    $(this).toggleClass("active");
    $("html").toggleClass("scroll-prevent");
  });
});

/* ==============================================================
# fv__inner-slider
=========================================================== */
$('.fv__inner-slider ul').slick({
  dots: false,
  arrows: false,
  fade: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
});


/* ===============================================
# slick
=============================================== */
$('.gallery__inner-slider ul').slick({
  dots: true,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1
      }
    }
  ]
});

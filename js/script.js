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
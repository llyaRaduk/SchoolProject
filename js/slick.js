$('.news_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 500,
      settings: {
       
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1079,
      settings: {
       
        slidesToShow: 2,
      }
    },
  ]
});

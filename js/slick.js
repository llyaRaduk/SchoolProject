$('.news_slider').slick({
 
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
       
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 850,
      settings: {
       
        slidesToShow: 2,
      }
    },
    
  ]
  
});

$('.teachers_slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
       
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 483,
      settings: {
       
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
       
        slidesToShow: 3,
      }
    },
  ]
  
});

$('.students_slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 770,
      settings: {
       
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 483,
      settings: {
       
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
       
        slidesToShow: 3,
      }
    },
  ]
  
});

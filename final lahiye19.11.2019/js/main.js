$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>250){
      $("#topBtn").fadeIn();

    }
    else{
      $("#topBtn").fadeOut();

    }
  })
  $("#topBtn").click(function(){
    $('html , body  ').animate({
      scrollTop :0
    }
    ,500);
  })
})
// top btn
$(window).scroll(function(){
  if($(window).scrollTop()>250){
      $(".navbar").addClass("colorzilla")
  }
  else( 
      $(".navbar").removeClass("colorzilla"))
}),



$(".slider").slick({
    slidesToShow:4,
    infinity:true,
    autoplay:400,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1 ,
            dots: false ,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows:false,
            nextArrow:false,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})
$(".img-blog2").slick({
  slidesToShow:1,
  infinity:true,
  autoplay:200,
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          nextArrow:false,
          prevArrow:false,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
})
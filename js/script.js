//nav start

$(".navbar-collapse a").click(function(){
  $(".navbar-collapse").collapse('hide')
})





$('#banner-part').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',
      autoplay: false,
    autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
         dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





$('#about-part .about .img').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  $('.counter').counterUp({
                delay: 10,
                time: 1000
            });














$('#course-part .course').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<i class="fa fa-angle-left prv" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right nxt" aria-hidden="true"></i>',
      
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


















$('#testimonal-part .test').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fa fa-angle-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-angle-right next" aria-hidden="true"></i>',

  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});






//insta part js

$('#insta-part .img').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
     arrows: false,

      autoplay: false,
    autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});






//============== fixed manu js start ===============//

$(window).scroll(function(){
    var scrollAmount = $(window).scrollTop()
    
    if(scrollAmount > 300){
        $(".menu").addClass("fixed")
    }else{
        $(".menu").removeClass("fixed")
    }
    
    //====== back to top button js =====
    
    if(scrollAmount > 2000){
      $(".btop").fadeIn();
    }else{
      $(".btop").fadeOut();
    }
})













//
//
//
//// back to top
//
//$(".btop").click(function () {
//  $("html,body").animate({
//    scrollTop: 0
//  }, 2000)
//})
//
//
//
//
//// fixed menu
//
//
//$(window).scroll(function(){
//    var scrollamount  = $(window).scrollTop()
//    
//    if(scrollamount > 500){
//      $(".menu").addClass("fixed")
//    }else{
//      $(".menu").removeClass("fixed")
//    }
//    
//       if(scrollamount > 1000){
//      $(".btop").fadeIn();
//    }else{
//      $(".btop").fadeOut();
//    }
//
//})
//

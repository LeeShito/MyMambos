
$("#menu_checkbox").click(function () {
  $('.menu_checkbox').toggleClass('open')
  $('.menu-list').toggleClass('open')
  
})


$(function name() {
    $('#products').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: '#next2',
        prevArrow:'#prev1',
        mobileFirst: true,
        dots:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots:false,
            }
          }
        ]
        
      });
    
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    responsiveClass:true,
    dots:false,
    margin:15,
    responsive:{
        0:{
            items:4,
            nav:true
        },
        600:{
            items:5,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }

  });
  
});
$(document).ready(function(){
  $(".owl-carousel1").owlCarousel({
    responsiveClass:true,
    dots:false,
    responsive:{
        0:{
            items:4,
            nav:true
        },
        600:{
            items:5,
            nav:false
        },
        1000:{
            items:7,
            nav:true,
            loop:false
        }
    }

  });
  
});

$(function name() {
  $('').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: false,
      prevArrow:false,
      mobileFirst: true,
      dots:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
            infinite: true,
            dots:false,
          }
        }
      ]
      
    });
  
})





$(function name() {
  $('.hero-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: '#next1',
      prevArrow: '#previous',
      fade:true,
      mobileFirst: true,
      dots:false,    
         
    });
  
})

$(function name() {
  $('#acoustic').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay:true,
      autoplaySpeed: 2000,
      mobileFirst: true,
      nextArrow: false,
      prevArrow:false,
      dots:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots:true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },

        {
          breakpoint: 300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        
      ]
         
    });
  
})

"use strict";
var swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});



$(document).ready(function() {
  $(".nav-item").click(function(event) {
    event.preventDefault();
    $(".nav-item").removeClass("active-nav");
    $(this).addClass("active-nav");
  });


 
    $(window).scroll(function(){
        var scrollTop = 200;
        
        if($(window).scrollTop() >= scrollTop){
            $('#site-header-main').addClass("scroll-ivent" );
        }
        else{
            $('#site-header-main').removeClass("scroll-ivent");  
        }
    })


  
      $('.header-contact').click(function() {
        $(this).find('.contact-content').toggle();
      });
    


});
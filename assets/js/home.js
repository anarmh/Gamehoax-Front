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


var swiper = new Swiper(".swiper-carousel", {
  slidesPerView: 4,
  spaceBetween: 30,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
    


      
  let menues = $("#our-products .tab-item .tab-title ");

  menues.on("click", function(e) {
    e.preventDefault();
    $(".active-menu").removeClass("active-menu");
    $(this).addClass("active-menu");
  
    let id = $(this).data("id");
    $(".item").addClass("d-none");
    $(`.item[data-id=${id}]`).removeClass("d-none").slick("setPosition");
  });
 

    //   $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     margin:10,
    //     nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:4
    //         }
    //     }
    // })

});
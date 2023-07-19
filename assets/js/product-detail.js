"use strict"

   



$(document).ready(function(){
    
   

    $(".xzoom, .xzoom-gallery").xzoom({
        zoomWidth:"800",
        tint:"#333",
        zoomHeight: "auto",
        position: "right",
        smoothScale: 20,
        defaultScale:1,
        scroll: false,
        adaptive: true,
        Xoffset: 10,
    })

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



var toTopButton = document.getElementById("to-top");

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 500) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
});

toTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
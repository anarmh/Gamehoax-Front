"use strict";

  

  
  


$(document).ready(function(){

    // var navItems = $('.nav-main');
  
   
    // navItems.removeClass('active-nav');
    
    
    // var activePage = window.location.href;
    
   
    // navItems.each(function() {
    //   var link = $(this).attr('href');
    
    //   if (link === activePage) {
       
    //     $(this).addClass('active-nav');
    //   }
    // });

       
   
    
    
  


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
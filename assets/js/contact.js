"use strict";

let navlinks=document.querySelectorAll("#site-header-main .header-center ul li a")
let windowPathname=window.location.pathname;

navlinks.forEach(navlink=>{
  const navLinkpathname=new URL(navlink.href).pathname;
  console.log(navLinkpathname);
    if((windowPathname===navLinkpathname) || (windowPathname=== `/index.html` && navLinkpathname===`/`)){
      navlink.classList.add(`active`)

    }
    
  
});


let searchToggle=document.querySelector(".searchToggle")

searchToggle.addEventListener("click", function(){

  searchToggle.classList.toggle("active")
})


$(document).ready(function(){
   

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
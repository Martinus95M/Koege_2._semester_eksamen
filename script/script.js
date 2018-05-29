$(document).ready(function(){
   // jQuery methods go here...
   //Dette er en toggle, dette gør at når man klikker på burger-menu icon oppe i højre hjørne vil den "show" eller "hide" efter om den er "show" eller "hide".
   $('.menu-toggle').click(function() {

  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');

});
});

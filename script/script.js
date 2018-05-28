$(document).ready(function(){
   // jQuery methods go here...
   $('.menu-toggle').click(function() {

  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');

});
});

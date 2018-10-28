
var $window   = $(window),
height    = $window.height(),
width     = $window.width(),
navheight = $('nav').height();

function sticky(){
  var scrollTop = $window.scrollTop();
    
    if (scrollTop > (height - navheight)) {
      $('nav').addClass('sticky');
      $('nav').addClass('nav_animate');
}

 else {

  $('nav').removeClass('sticky');
  $('nav').removeClass('nav_animate');
  } 
}

$window.on('scroll', sticky);  

//Navigational Menu
$('nav a').click(function(a){
var menuPlace = $(this).index();
a.preventDefault();
$('html, body').animate({
scrollTop : $('section').eq(menuPlace).offset().top - $('nav').height()
}, 700);
});
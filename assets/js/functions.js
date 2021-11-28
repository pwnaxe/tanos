function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(52.357667, 21.026999),
        zoom: 9, };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

window.addEventListener('DOMContentLoaded',function () {
  myMap();
});

$(document).ready(function(){
$('.fade').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    appendArrows: slider,
    centerMode: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

$(document).ready(function(){
  $('.single-item').slick({
    
  });
});

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  else {
    navbar.classList.remove("sticky");
  }
}
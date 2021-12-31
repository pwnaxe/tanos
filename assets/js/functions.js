document.addEventListener('DOMContentLoaded', function() {
window.addEventListener('scroll', navscroll);

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navscroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } 
  else {
    navbar.classList.remove("sticky");
  }
}
})

window.addEventListener('DOMContentLoaded',function () {
  myMap();
});

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(52.357667, 21.026999),
        zoom: 9, };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

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

function burgerFunction(){
  let button = document.getElementById("dropdown-links");
  if (button.style.display === "block") {
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }
}

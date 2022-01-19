// document.addEventListener("DOMContentLoaded", function () {
// window.addEventListener("scroll", navscroll);

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function navscroll() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// });

// window.addEventListener("DOMContentLoaded", function () {
// });

$(document).ready(function () {
  myMap();

  $(".fade").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    appendArrows: slider,
    centerMode: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });

  $(".single-item").slick({});

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });
  
});

function myMap() {
  const mapProp = {
    center: new google.maps.LatLng(52.357667, 21.026999),
    zoom: 9,
  };
  const map = new google.maps.Map(
    document.getElementById("googleMap"),
    mapProp
  );
}

function burgerFunction() {
  const button = document.getElementById("dropdown-links");
  button.classList.toggle("hidden");
}


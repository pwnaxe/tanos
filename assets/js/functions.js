$(document).ready(function () {
  myMap();

  $(".single-item").slick({
    variableWidth: false,
  });

  $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    variableWidth: true,
  });

  var $hamburger = $(".hamburger");
  $hamburger.on("click", function (e) {
    $hamburger.toggleClass("is-active");
  });

  var $hamburger1 = $(".hamburger1");
  $hamburger1.on("click", function (e) {
    $hamburger1.toggleClass("is-active");
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

function burgerFunction1() {
  const button1 = document.getElementById("dropdown-links1");
  button1.classList.toggle("hidden");
}

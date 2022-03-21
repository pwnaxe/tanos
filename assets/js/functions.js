$(document).ready(function () {
  initMap();

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

function initMap() {
  const tanosmap = { lat: 52.357856, lng: 21.028806 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: tanosmap,
  });
  const marker = new google.maps.Marker({
    position: tanosmap,
    map: map,
  });
}

function burgerFunction() {
  const button = document.getElementById("dropdown-links");
  button.classList.toggle("hidden");
}

function burgerFunction1() {
  const button1 = document.getElementById("dropdown-links1");
  button1.classList.toggle("hidden");
}

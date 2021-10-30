window.onscroll = function() {
    navscroll()
};
var navbar = document.getElementsByTagName("nav");
var sticky = navbar.offsetTop;
function navscroll() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}
// var splide = new Splide( '.splide', {
//     direction: 'ttb',
//     height   : '10rem',
//     wheel    : true,
// } );

// splide.mount();

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5, };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

window.addEventListener('DOMContentLoaded',function () {
  //your code here
  myMap();
});

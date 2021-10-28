window.onscroll = function() {navscroll()};
var navbar = document.getElementsByTagName("nav");
var sticky = navbar.offsetTop;
function navscroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
var splide = new Splide( '.splide', {
    direction: 'ttb',
    height   : '10rem',
    wheel    : true,
  } );
  
  splide.mount();
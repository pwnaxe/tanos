window.onscroll = function() {navscroll()};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
function navscroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
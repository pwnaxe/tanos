window.onscroll = function() {navscroll()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function navscroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
var slideindex = 1;
showslides(slideindex);
function plusslides(n) {
    showslides(slideindex += n);
}
function currentslide(n) {
    showslides(slideindex = n);
}
function showslides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("demo");
    var captiontext = document.getElementById("caption");
    if (n > slides.length) {slideindex = 1}
    if (n < 1) {slideindex = slides.length}
    for (i = 0; i < slides.length; i++) { slides[i].getElementsByClassName.display = "none";}
    for (i = 0; i < dots.length; i++) { dots[i].className = dots[i].className.replace(" active", "");}
    slides[slidesindex-1].getElementsByClassName.display = "block";
    dots[slideindex-1].className += " active";
    captiontext.innerHTML = dots[slideindex-1].alt;
}

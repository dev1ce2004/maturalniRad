let openClose = true;
const scrollbarWidth = document.body.offsetWidth - document.body.clientWidth;

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

function openNav() {
    if (openClose) {
        document.getElementsByClassName("burger")[0].style.marginRight = (scrollbarWidth + 56) + "px";
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
        document.getElementById("nav").style.height = "100%";
        document.getElementById("navbar").style.zIndex = "10";
        document.getElementsByClassName("header-logo")[0].style.opacity = "0";
        document.getElementsByClassName("overlay-main-content")[0].style.height = "max-content";
        openClose = false;
    } else {
        document.getElementsByClassName("burger")[0].style.marginRight = 40 + "px";
        document.getElementsByTagName("body")[0].style.overflowY = "scroll";
        document.getElementById("nav").style.height = "0%";
        document.getElementsByClassName("overlay-main-content")[0].style.height = "0";
        openClose = true;
        setTimeout(() => document.getElementsByClassName("header-logo")[0].style.opacity = "1", 500);

    }
}


let burger = document.getElementsByClassName("burger")[0];
burger.addEventListener('click', function () {
    burger.classList.toggle("activated");
    burger.style.mixBlendMode = 'difference';
});
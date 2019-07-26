// Header po scrollu

window.onload = function () {

    window.onscroll = function () {

        var header = document.getElementById("header");
        var yScrollAxis = window.pageYOffset;

        if (yScrollAxis > 100)
            header.style.backgroundColor = "#303030";
        else
            header.style.backgroundColor = "transparent";


    };
};

// Hamburger i menu

const icon = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
icon.addEventListener("click", function () {
    icon.classList.toggle("active");
    menu.classList.toggle("active");
});
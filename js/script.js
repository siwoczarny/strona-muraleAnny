const icon = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
icon.addEventListener("click", function () {
    icon.classList.toggle("active");
    menu.classList.toggle("active");
});
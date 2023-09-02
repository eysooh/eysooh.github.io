const themeToggleInput = document.getElementById("theme-toggle-input");
const themeLink = document.getElementById("theme");
const logoImgEysooh = document.getElementById("logo-imgEysooh");
const logoImg = document.getElementById("logo-img");
const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');
const logo = document.querySelector('.logo');




let currentTheme = "styledark.css";
let logoEysoohToggle = false;
let logoToggle = false;

themeToggleInput.addEventListener("change", () => {
    currentTheme = currentTheme === "styledark.css" ? "stylewhite.css" : "styledark.css";
    themeLink.setAttribute("href", currentTheme);
});

themeToggleInput.addEventListener("click", () => {
    logoImgEysooh.setAttribute("src", logoEysoohToggle ? "./img/logoEysooh.png" : "./img/logoEysooh2.png");
    logoEysoohToggle = !logoEysoohToggle;
    logoImg.setAttribute("src", logoToggle ? "./img/logo.png" : "./img/logo2.png");
    logoToggle = !logoToggle;
});

navIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const setNavActive = () => {
    navLinks.classList.toggle('active', window.innerWidth >= 413);
};

window.addEventListener('resize', setNavActive);
window.addEventListener('load', setNavActive);

window.addEventListener('scroll', function () {
    const body = document.body;
    const scrolled = window.scrollY > 60;
    if (scrolled) {
        body.classList.add('scrolled');
    } else {
        body.classList.remove('scrolled');
    }
});



window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    logo.style.transition = "0.3s ease-in-out";

    if (currentScrollPos > 60) {
        navLinks.style.opacity = '0';
        logo.style.paddingLeft = "48%"; // Agrega la clase para cambiar la alineación
    } else {
        navLinks.style.opacity = '1';
        logo.style.paddingLeft = "0px"; // Remueve la clase para restaurar la alineación original
    }
});

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const screenWidth = window.innerWidth; // Obtén el ancho actual de la pantalla
    logo.style.transition = "0.3s ease-in-out";

    if (currentScrollPos > 60 && screenWidth >= 1620) {
        navLinks.style.opacity = '0';
        logo.style.paddingLeft = "48%"; // Agrega el estilo para cambiar la alineación
    } else {
        navLinks.style.opacity = '1';
        logo.style.paddingLeft = "0px"; // Elimina el estilo para restaurar la alineación original
    }
});
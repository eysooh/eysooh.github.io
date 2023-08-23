const themeToggleInput = document.getElementById("theme-toggle-input");
const themeLink = document.getElementById("theme");
const logoImgEysooh = document.getElementById("logo-imgEysooh");
const logoImg = document.getElementById("logo-img");
const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');

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
const expandNavbar = document.querySelector(".hamburger__btn");
const navbar = document.querySelector(".navbar");
const navbarBackdrop = document.querySelector(".backdrop");
const hamburgerIcon = document.querySelector(".hamburger__icon");


expandNavbar.addEventListener("click", () => {
    // Showing Navbar
    navbar.classList.toggle("navbar__show");
    // Making a blur background for the navigation on small screens
    navbarBackdrop.classList.toggle("blur");
    // Animation on the hamburger icon when expanding the navbar
    hamburgerIcon.classList.toggle("hamburger__icon__active");
});


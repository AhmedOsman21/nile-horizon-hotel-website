const expandNavbarBtn = document.querySelector(".hamburger__btn");
const navbar = document.querySelector(".navbar");
const navbarBackdrop = document.querySelector(".backdrop");
const hamburgerIcon = document.querySelector(".hamburger__icon");

// Toggle the navbar show/hide
function toggleNavbar() {
    // Showing Navbar
    navbar.classList.toggle("navbar__show");
    // Making a blur background for the navigation on small screens
    navbarBackdrop.classList.toggle("blur");
    // Animation on the hamburger icon when expanding the navbar
    hamburgerIcon.classList.toggle("hamburger__icon__active");
}

// Hide the navbar
function hideNavbar() {
    const navbarShown = navbar.classList.contains("navbar__show");
    const backdropShown = navbarBackdrop.classList.contains("blur");
    const menuOpened = hamburgerIcon.classList.contains("hamburger__icon__active");

    // Hide Navbar Widget
    if (navbarShown) navbar.classList.remove("navbar__show");
    // Hide Backdrop
    if (backdropShown) navbarBackdrop.classList.remove("blur");;
    // Close Menu Icon
    if (menuOpened) hamburgerIcon.classList.remove("hamburger__icon__active");
}

// Clicking the menu icon
expandNavbarBtn.addEventListener("click", toggleNavbar);

// Clicking outside the navbar
navbarBackdrop.addEventListener("click", toggleNavbar);

// Clicking the ESC Button
document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        hideNavbar();
        // Remove focus state from the button
        expandNavbarBtn.blur();
    }
});
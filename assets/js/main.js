// Navbar Elements
const expandNavbarBtn = document.querySelector(".hamburger__btn");
const navbar = document.querySelector(".navbar");
const navbarBackdrop = document.querySelector(".backdrop");
const hamburgerIcon = document.querySelector(".hamburger__icon");

// Toggle the navbar show/hide
function toggleNavbar() {
    // Show/Hide navbar
    navbar.classList.toggle("expand__navbar");
    if (navbar.classList.contains("expand__navbar")) {
        // Remove the collapse class if the navbar was expanded
        navbar.classList.remove("collapse__navbar");
        // Scrolling works only on the navbar
        document.body.classList.add("no-scroll");
    } else {
        // Add the collapse class if the navbar was collapsed
        navbar.classList.add("collapse__navbar");
        // Reset scrolling behavoir of the page
        document.body.classList.remove("no-scroll");
    }
    // Making a blur background for the navigation on small screens
    navbarBackdrop.classList.toggle("blur");
    // Animation on the hamburger icon when expanding the navbar
    hamburgerIcon.classList.toggle("hamburger__icon__active");
}

// Hide the navbar
function hideNavbar() {
    const navbarShown = navbar.classList.contains("expand__navbar");
    const backdropShown = navbarBackdrop.classList.contains("blur");
    const menuOpened = hamburgerIcon.classList.contains("hamburger__icon__active");

    // Hide Navbar Widget
    if (navbarShown)  {
        navbar.classList.remove("expand__navbar");
        navbar.classList.add("collapse__navbar");
        // Reset scrolling behavoir of the page
        document.body.classList.remove("no-scroll");
    }
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
    }
});

// Close the navbar if viewport changed to avoid overflow bugs
window.addEventListener("resize", hideNavbar);
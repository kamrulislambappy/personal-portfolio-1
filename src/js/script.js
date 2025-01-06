// add mobile menu
function addMobileMenu() {
    const menuIcon = document.getElementById("menu-icon").classList;
    const AddmobileMenu = document.getElementById("mobile-menu").classList;

    AddmobileMenu.add('block');
    AddmobileMenu.remove('hidden');
    menuIcon.add('hidden');
};

// close mobile menu
function closeMobileMenu () {
    const menuIcon = document.getElementById("menu-icon").classList;
    const ClosemobileMenu = document.getElementById("mobile-menu").classList;

    ClosemobileMenu.add('hidden');
    ClosemobileMenu.remove('block');
    menuIcon.remove('hidden');
}

// mobile menu click to close menu
function mobileMenuLink() {
    const menuIcon = document.getElementById("menu-icon").classList;
    const ClosemobileMenu = document.getElementById("mobile-menu").classList;

    ClosemobileMenu.add('hidden');
    ClosemobileMenu.remove('block');
    menuIcon.remove('hidden');
}


// overflow section slider script
function testimonialsLeftBtn() {
    const slider = document.getElementById("slider");

    // Scroll Left
    slider.scrollBy({
        left: -385, // Adjust this value for how much to scroll
        behavior: "smooth",
    });
}
function testimonialsRightBtn() {
    const slider = document.getElementById("slider");
        
    // Scroll Eight
    slider.scrollBy({
        left: 385, // Adjust this value for how much to scroll
        behavior: "smooth",
    });
}
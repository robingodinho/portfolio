function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    // Toggle the 'open' class for both the menu links and the hamburger icon
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
}

function scrollToExperience() {
    const experienceSection = document.getElementById('experience');
    const yOffset = -document.querySelector('nav').offsetHeight; // Get the height of the navigation bar
    const yPosition = experienceSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
    });
}


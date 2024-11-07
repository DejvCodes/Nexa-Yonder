// ----------------------- SHOW MENU -----------------------
const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('nav-links');
const navLinks = document.querySelectorAll('.nav-links a');

burgerMenu.addEventListener('click', () => {
    showMenu();
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        showMenu();
    });
});

const showMenu = () => {
    nav.classList.toggle('nav-active');
    burgerMenu.classList.toggle('toggle');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.2}s`;
        }
    });
};
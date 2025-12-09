// ----------------------- LOADER -----------------------
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1500);
});

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

// ----------------------- SCROLL SECTION ACTIVE LINK -----------------------
const section = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav-links a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);

// ----------------------- SCROLLUP BTN -----------------------
const scrollBtn = document.getElementById('scrollUp');
const header = document.getElementById('header');

scrollBtn.addEventListener('click', () =>{
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', (e) => {
    // console.log(window.scrollY);
    const headerPosition = header.getBoundingClientRect();
    // console.log(headerPosition);

    if (window.scrollY > headerPosition.bottom) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// ----------------------- DATE IN FOOTER -----------------------
const dateElement = document.getElementById('date');
const currentYear = new Date().getFullYear();
dateElement.textContent = currentYear;

// ----------------------- SCROLLREVEAL ANIMATION -----------------------
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '3000',
    delay: 300,
    // reset: true // Animation repeat
});

sr.reveal('.home-data, .section-title-process, .section-title-size-help');
sr.reveal('.section-title-about-us, .cards-size-help', {delay:200, distance:'100px',interval: 100});
sr.reveal('.cards-process', {delay:100, distance:'70px',interval: 100});
sr.reveal('.sponsors-container, .contact-container', {distance:'150px',origin:'left'});
sr.reveal('.about-description, .footer-top, .process-description, .footer-bottom', {interval:100});
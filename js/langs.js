const translations = {
  cz: {
    nav: {
      home: "Domů",
      about: "O nás",
      process: "Proces",
      size: "Velikost",
      contact: "Kontakt"
    },
    home: {
      title: '<span class="highlight">Stavíme</span> budoucnost<br>Vaší firmy',
      estimate: "Orientační odhad",
      subtitle: "Profesionální zázemí, jednoduše s námi!",
      place: "Místo",
      send: "Odeslat",
      hallType: "Hala pro střední fabriku",
      priceFrom: "Od 700 000 Kč",
      region: "Středočeský kraj"
    },
    about: {
      title: "O nás",
      description: "Nexa Yonder byla založena v roce 2005 a od té doby jsme se stali lídry ve výstavbě hal a továren. S více než 15 lety zkušeností přinášíme excelenci a inovace do každého projektu. Specializujeme se na využívání moderních technologií a kvalitních materiálů, abychom splnili individuální potřeby našich klientů."
    },
    process: {
      title: "Jak fungujeme?",
      description: "Poskytujeme Vám nejlepší způsob, jak postavit halu s jednoduchými a bezpečnými procesy. Podívejte se, jak to děláme!",
      steps: [
        { title: "Domluva", text: "Trochu povídání, domlouvání, vylepšování a tak dále." },
        { title: "Práce", text: "Přemýšlení, plánování, bourání, stavění, stěhování." },
        { title: "Předání", text: "Dokončování, zametání, předávání, radost!" }
      ]
    },
    size: {
      title: "Nevíte si rady s velikostí?",
      halls: [
        { title: "Velká hala", capacity: "Pro 1000+ lidí" },
        { title: "Střední hala", capacity: "Do 1000 lidí" },
        { title: "Malá hala", capacity: "Do 500 lidí" }
      ]
    },
    contact: {
      cardTitle: "Využíváme dotace!",
      cardText: "S přispěním finančních dotací od Evropské unie stavíme naše moderní haly. Tyto prostředky nám umožňují investovat do nejnovějších technologií, vytvářet ekologicky šetrné stavby a posilovat naši konkurenční schopnost.",
      moreInfo: "Zjistit více",
      formTitle: "Kontaktujte nás",
      companyName: "Název firmy"
    },
    footer: {
      tagline: "Stavíme budoucnost vaší firmy od roku 2005",
      links: "Odkazy",
      legal: "Práva",
      follow: "Sledujte nás",
      cookies: "Cookies",
      privacy: "Ochrana osobních údajů",
      terms: "Obchodní podmínky",
      rights: "Všechna práva vyhrazena.",
      development: "Vývoj:"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About us",
      process: "Process",
      size: "Size",
      contact: "Contact"
    },
    home: {
      title: '<span class="highlight">Building</span> the future<br>of your company',
      estimate: "Indicative estimate",
      subtitle: "Professional background, simply with us!",
      place: "Place",
      send: "Send",
      hallType: "Hall for medium factory",
      priceFrom: "From 700 000 CZK",
      region: "Central Region"
    },
    about: {
      title: "About Us",
      description: "Nexa Yonder was founded in 2005 and since then we have become leaders in the construction of halls and factories. With over 15 years of experience, we bring excellence and innovation to every project. We specialize in using modern technology and quality materials to meet our clients individual needs."
    },
    process: {
      title: "How do we work?",
      description: "We provide you with the best way to build a hall with simple and safe processes. See how we do it!",
      steps: [
        { title: "Agreement", text: "A bit of talking, cajoling, tweaking and so on." },
        { title: "Work", text: "Thinking, planning, tearing down, building, moving." },
        { title: "Handover", text: "Finishing, sweeping, handing over, enjoying!" }
      ]
    },
    size: {
      title: "Don't know what size?",
      halls: [
        { title: "Large Hall", capacity: "For 1000+ people" },
        { title: "Medium Hall", capacity: "Up to 1000 people" },
        { title: "Small Hall", capacity: "Up to 500 people" }
      ]
    },
    contact: {
      cardTitle: "We use subsidies!",
      cardText: "With the help of financial subsidies from the European Union, we are building our modern halls. These funds allow us to invest in the latest technologies, to create environmentally friendly buildings and to strengthen our competitiveness.",
      moreInfo: "Show more",
      formTitle: "Contact Us",
      companyName: "Company Name"
    },
    footer: {
      tagline: "Building the future of your company since 2005",
      links: "Links",
      legal: "Rights",
      follow: "Follow us",
      cookies: "Cookies",
      privacy: "Privacy Policy",
      terms: "Terms and Conditions",
      rights: "All rights reserved.",
      development: "Development:"
    }
  }
};

// CZ language as default
let currentLang = 'cz';

// Function to translate the page
const translate = (lang) => {
  currentLang = lang;
  const t = translations[lang];
  
  // Navigation links
  document.querySelectorAll('.nav-links .link').forEach((link, i) => {
    const keys = Object.values(t.nav);
    if (keys[i]) link.innerHTML = keys[i];
  });
  
  // Home section
  document.querySelector('.home-title h1').innerHTML = t.home.title;
  document.querySelector('.home-box-container h2').textContent = t.home.estimate;
  document.querySelector('.home-box-container h3').textContent = t.home.subtitle;
  document.querySelector('#place').placeholder = t.home.place;
  document.querySelectorAll('.home-btn-send, .btn-send-contact').forEach(btn => {
    btn.textContent = t.home.send;
  });
  document.querySelector('.stars-container h3').textContent = t.home.hallType;
  document.querySelector('.stars-container-price').textContent = t.home.priceFrom;
  document.querySelector('.row h3').textContent = t.home.region;
  
  // About
  document.querySelector('.section-title-about-us').textContent = t.about.title;
  document.querySelector('.about .shadow-text').textContent = t.about.title;
  document.querySelector('.about-description').textContent = t.about.description;
  
  // Process
  document.querySelector('.section-title-process').textContent = t.process.title;
  document.querySelector('.process-description').textContent = t.process.description;
  document.querySelectorAll('.card-process').forEach((card, i) => {
    if (t.process.steps[i]) {
      card.querySelector('h2').textContent = t.process.steps[i].title;
      card.querySelector('p').textContent = t.process.steps[i].text;
    }
  });
  
  // Size
  document.querySelector('.section-title-size-help').textContent = t.size.title;
  document.querySelectorAll('.card-data').forEach((card, i) => {
    if (t.size.halls[i]) {
      card.querySelector('h2').textContent = t.size.halls[i].title;
      card.querySelector('p').textContent = t.size.halls[i].capacity;
    }
  });
  
  // Contact
  document.querySelector('.contact-card h2').textContent = t.contact.cardTitle;
  document.querySelector('.contact-card p').textContent = t.contact.cardText;
  document.querySelector('.btn-info').textContent = t.contact.moreInfo;
  document.querySelector('.contact-form-title h2').textContent = t.contact.formTitle;
  document.querySelector('#name-contact').placeholder = t.contact.companyName;
  
  // Footer
  document.querySelector('.footer-column p').textContent = t.footer.tagline;
  const footerHeadings = document.querySelectorAll('.footer-column h4');
  footerHeadings[0].textContent = t.footer.links;
  footerHeadings[1].textContent = t.footer.legal;
  footerHeadings[2].textContent = t.footer.follow;
  
  // Footer menu links
  const footerLinks = document.querySelectorAll('.footer-link');
  const navKeys = Object.values(t.nav);
  footerLinks.forEach((link, i) => {
    if (navKeys[i]) link.textContent = navKeys[i];
  }); 
  
  const legalLinks = document.querySelectorAll('.footer-column')[2].querySelectorAll('a');
  legalLinks[0].textContent = t.footer.cookies;
  legalLinks[1].textContent = t.footer.privacy;
  legalLinks[2].textContent = t.footer.terms;
  
  document.querySelector('.footer-bottom p:first-child').innerHTML = 
    `&#169; <span id="date"></span> Nexa Yonder. ${t.footer.rights}`;
  document.querySelector('.footer-bottom p:last-child').innerHTML = 
    `${t.footer.development} <a href="https://dejvcodes.com" target="_blank">DejvCodes</a>`;
  
  // Date update
  document.getElementById('date').textContent = new Date().getFullYear();
  
  // Active button highlight
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

// Event listeners for language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const lang = btn.getAttribute('data-lang');
    translate(lang);
  });
});

// Inicializace
document.addEventListener('DOMContentLoaded', () => {
  translate('cz');
});
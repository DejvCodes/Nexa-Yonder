const langs = document.querySelectorAll('.lang-content a');

langs.forEach(lang => {
    lang.addEventListener('click', () => {
        attr = lang.getAttribute('language');
        // console.log(attr);

        // -------------------- NAV MENU --------------------
        const links = document.querySelectorAll('.link');
        links.forEach((link, index) => {
            link.innerHTML = data[attr].link[index];
        });

        // -------------------- HOME --------------------
        const homeTitle = document.querySelector('.home-title h1');
        homeTitle.innerHTML = data[attr].homeTitle;

        const boxContainerH2 = document.querySelector('.home-box-container h2');
        boxContainerH2.textContent = data[attr].boxContainerH2;

        const boxContainerH3 = document.querySelector('.home-box-container h3');
        boxContainerH3.textContent = data[attr].boxContainerH3;

        const inputPlace = document.querySelector('input#place');
        inputPlace.placeholder = data[attr].inputPlace;

        const btnSend = document.querySelectorAll('.home-btn-send, .btn-send-contact');
        btnSend.forEach(btn => {
            btn.textContent = data[attr].btnSend;
        });

        const smallContainerH3 = document.querySelector('.stars-container h3');
        smallContainerH3.textContent = data[attr].smallContainerH3;

        const smallContainerPrice = document.querySelector('.stars-container .stars-container-price');
        smallContainerPrice.textContent = data[attr].smallContainerPrice;  

        // -------------------- ABOUT US --------------------
        const aboutUsTitle = document.querySelector('.section-title-about-us');
        aboutUsTitle.textContent = data[attr].aboutUsTitle;

        const aboutUsShadowTitle = document.querySelector('.about .shadow-text');
        aboutUsShadowTitle.innerHTML = data[attr].aboutUsShadowTitle;

        const aboutDescription = document.querySelector('.about-description');
        aboutDescription.textContent = data[attr].aboutDescription;

        // -------------------- PROCESS --------------------
        const procesTitle = document.querySelector('.section-title-process');
        procesTitle.textContent = data[attr].procesTitle;

        const procesDescription = document.querySelector('.process-description');
        procesDescription.textContent = data[attr].procesDescription;

        const cardsProces = document.querySelectorAll('.card-process');
        cardsProces.forEach((card, index) => {
            const cardH2 = card.querySelector('h2');
            const cardP = card.querySelector('p');
            // console.log(index);
            cardH2.textContent = data[attr].cardH2[index];
            cardP.textContent = data[attr].cardP[index];
        });

        // -------------------- SIZE HELP --------------------
        const titleSizeHelp = document.querySelector('.section-title-size-help');
        titleSizeHelp.textContent = data[attr].titleSizeHelp;

        const cardsData = document.querySelectorAll('.card-data');
        cardsData.forEach((card, index) => {
            const cardH2size = card.querySelector('h2');
            const cardPsize = card.querySelector('p');
            // console.log(card);
            cardH2size.textContent = data[attr].cardH2size[index];
            cardPsize.textContent = data[attr].cardPsize[index];
        });

        // -------------------- CONTACT --------------------
        const contactCardH2 = document.querySelector('.contact-card h2');
        contactCardH2.textContent = data[attr].contactCardH2;

        const contactCardP = document.querySelector('.contact-card p');
        contactCardP.textContent = data[attr].contactCardP;

        const btnInfo = document.querySelector('.btn-info');
        btnInfo.textContent = data[attr].btnInfo;

        const titleContactFrom = document.querySelector('.contact-form-title h2');
        titleContactFrom.textContent = data[attr].titleContactFrom;

        const nameContact = document.querySelector('.contact-form-left #name-contact');
        nameContact.placeholder = data[attr].nameContact;

        // -------------------- FOOTER --------------------
        const footerData = document.querySelector('.footer-data');
        footerData.innerHTML = data[attr].footerData;
    });
});

// DATA
const data = {
  czech: {
    link : ["Domů", "O&nbsp;nás", "Proces", "Velikost", "Kontakt"],
    homeTitle : "Stavíme budoucnost <br> Vaší firmy",
    boxContainerH2 : "Orientační odhad",
    boxContainerH3 : "Profesionální zázemí, jednoduše s námi!",
    inputPlace: "Místo",
    btnSend: "Odeslat",
    smallContainerH3 : "Hala pro střední fabriku",
    smallContainerPrice : "Od 700 000 Kč",
    smallContainerRegion : "Středočeský kraj",
    aboutUsTitle : "O nás",
    aboutUsShadowTitle : "O&nbsp;nás",
    aboutDescription : "Nexa Yonder byla založena v roce 2005 a od té doby jsme se stali lídry ve výstavbě hal a továren. S více než 15 consty zkušeností přinášíme excelenci a inovace do každého projektu. Specializujeme se na využívání moderních technologií a kvalitních materiálů, abychom splnili individuální potřeby našich klientů.",
    procesTitle : "Jak fungujeme?",
    procesDescription : "Poskytujeme Vám nejlepší způsob, jak postavit halu s jednoduchými a bezpečnými procesy. Podívejte se, jak to děláme!",
    cardH2 : ["Domluva", "Práce", "Předání"],
    cardP : [
    "Trochu povídání, domlouvání, vylepšování a tak dále.",
    "Přemýšlení, plánování, bourání, stavění, stěhování.",
    "Dokončování, zametání, předávání, radost!",
    ],
    titleSizeHelp : "Nevíte si rady s velikostí?",
    cardH2size : ["Velká hala", "Střední hala", "Malá hala"],
    cardPsize : ["Pro 1000+ lidí", "Do 1000 lidí", "Do 500 lidí"],
    
    contactCardH2 : "Využíváme dotace!",
    contactCardP : "S přispěním finančních dotací od Evropské unie stavíme naše moderní haly. Tyto prostředky nám umožňují investovat do nejnovějších technologií, vytvářet ekologicky šetrné stavby a posilovat naši konkurenční schopnost.",
    btnInfo : "Zjistit více",
    titleContactFrom : "Kontaktujte nás",
    nameContact : "Název firmy",
    footerData : "&#169; 2024 Nexa Yonder Všechna práva vyhrazena. <br> | Cookies | Zásady ochrany osobních údajů | Obchodní podmínky | <br> Sledujte nás: @Nexa Yonder | Vytvořeno s láskou a inovacemi <br> Design: <a href='https://jirkydesign.com/' target='_blank'>www.jirkydesign.cz</a> <br> Vývoj: <a href='https://www.linkedin.com/in/david-kalmus-5b6b99299/' target='_blank'>David Kalmus </a>",
},
  english : {
    link : ["Home", "About&nbsp;us", "Process", "Size", "Contact"],

    homeTitle : "We build the future <br> of your company",
    boxContainerH2 : "Indicative estimate",
    boxContainerH3 : "Professional background, simply with us!",
    inputPlace : "Place",
    btnSend : "Send",
    smallContainerH3 : "Hall for medium factory",
    smallContainerPrice : "From 700 000 CZK",
    smallContainerRegion : "Central Bohemia Region",

    aboutUsTitle : "About Us",
    aboutUsShadowTitle : "About&nbsp;Us",
    aboutDescription : "Nexa Yonder was founded in 2005 and since then we have become leaders in the construction of halls and factories. With over 15 years of experience, we bring excellence and innovation to every project. We specialize in using modern technology and quality materials to meet our clients individual needs.",

    procesTitle : "How do we work?",
    procesDescription : "We provide you with the best way to build a hall with simple and safe processes. See how we do it!",
    cardH2 : ["Agreement", "Work", "Handover"],
    cardP : [
    "A bit of talking, cajoling, tweaking and so on.",
    "Thinking, planning, tearing down, building, moving.",
    "Finishing, sweeping, handing over, enjoying!",
    ],

    titleSizeHelp : "Don't know what size?",
    cardH2size : ["Large Hall", "Medium Hall", "Small Hall"],
    cardPsize : ["For 1000+ people", "Up to 1000 people", "Up to 500 people"],

    contactCardH2 : "We use subsidies!",
    contactCardP : "With the help of financial subsidies from the European Union, we are building our modern halls. These funds allow us to invest in the latest technologies, to create environmentally friendly buildings and to strengthen our competitiveness.",
    btnInfo : "Show more",
    titleContactFrom : "Contact Us",
    nameContact : "Company Name",

    footerData : "&#169; 2024 Nexa Yonder All rights reserved. <br> | Cookies | Privacy Policy | Terms and Conditions | <br> Follow us: @Nexa Yonder | Created with love and innovation <br> Design: <a href='https://jirkydesign.com/' target='_blank'>www.jirkydesign.cz</a> <br> Development: <a href='https://www.linkedin.com/in/david-kalmus-5b6b99299/' target='_blank'>David Kalmus </a>",
  }
}
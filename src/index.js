import "./styles.css";

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navList = document.getElementById("nav-list");
  const navBar = document.querySelector(".nav");

  if (!menuToggle || !navList || !navBar) {
    console.error("Un des éléments du menu est introuvable. Vérifie ton HTML.");
    return;
  }

  let lastScrollTop = 0;
  let isScrollingDown = false;

  // Fixe la barre de navigation en haut sans masquer le contenu
  navBar.style.position = "fixed";
  navBar.style.top = "0";
  navBar.style.width = "100%";
  navBar.style.zIndex = "1000";
  navBar.style.transition =
    "background-color 0.5s ease, opacity 0.5s ease, transform 0.5s ease";

  document.body.style.paddingTop = navBar.offsetHeight + "px";

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Vérifier si GSAP est bien chargé
  if (typeof gsap === "undefined") {
    console.error("GSAP n'est pas chargé. Vérifie ton inclusion dans le HTML.");
    return;
  }

  // Animation du menu avec GSAP
  gsap.from(".nav", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
  gsap.from(".nav-list li", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Effet de transparence et disparition du menu en scroll
  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && !isScrollingDown) {
      isScrollingDown = true;
      gsap.to(navBar, {
        duration: 0.5,
        opacity: 0,
        y: -50,
        ease: "power2.out",
      });
    } else if (scrollTop < lastScrollTop && isScrollingDown) {
      isScrollingDown = false;
      gsap.to(navBar, {
        duration: 0.5,
        opacity: 0.9,
        y: 0,
        backgroundColor: "rgba(0, 90, 141, 0.9)",
        ease: "power2.out",
      });
    }
    lastScrollTop = scrollTop;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".service-card");

  // Vérifie si les cartes existent avant d’appliquer GSAP
  if (cards.length > 0) {
    gsap.to(cards, {
      duration: 1,
      opacity: 1,
      scale: 1,
      stagger: 0.2, // Animation en séquence
      ease: "power2.out",
    });

    // Effet d'animation au survol des boutons
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.2, ease: "power2.out" });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
      });
    });
  } else {
    console.error("Aucune carte trouvée pour l'animation GSAP !");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  gsap.from(timelineItems, {
    duration: 1,
    opacity: 0,
    x: (i) => (i % 2 === 0 ? -50 : 50), // Alterne entre gauche et droite
    stagger: 0.3,
    ease: "power2.out",
  });
});

// Section Zone d'Intervention
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".zone-intervention h2, .zone-description", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out",
  });

  gsap.from(".city-card", {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    ease: "power2.out",
  });
});

// zone-intervention
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".zone-text", {
    duration: 1,
    opacity: 0,
    x: -50,
    ease: "power2.out",
  });

  gsap.from(".zone-image img", {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    delay: 0.3,
    ease: "power2.out",
  });
});

//
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;
  let autoSlide;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      if (i === index) {
        testimonial.classList.add("active");
      } else {
        testimonial.classList.remove("active");
      }
    });
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  // Défilement automatique toutes les 4 secondes
  function startAutoSlide() {
    autoSlide = setInterval(nextTestimonial, 4000);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  nextBtn.addEventListener("click", function () {
    nextTestimonial();
    stopAutoSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", function () {
    prevTestimonial();
    stopAutoSlide();
    startAutoSlide();
  });

  // Lancer l'animation automatique au chargement
  showTestimonial(currentIndex);
  startAutoSlide();

  // Animation d’apparition GSAP
  gsap.from(".testimonials h2", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power2.out",
  });

  gsap.from(".testimonials-container", {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    delay: 0.3,
    ease: "power2.out",
  });
});

// formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  // Validation du formulaire
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || service === "" || message === "") {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    alert("Votre message a été envoyé avec succès !");
    contactForm.reset();
  });

  // Animation GSAP au chargement
  gsap.from(".section-title, .section-subtitle", {
    duration: 1,
    opacity: 0,
    y: -30,
    stagger: 0.2,
    ease: "power2.out",
  });

  gsap.from(".contact-form", {
    duration: 1,
    opacity: 0,
    scale: 0.9,
    delay: 0.3,
    ease: "power2.out",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Vérifier le scroll et afficher/cacher le bouton
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  // Remonter en haut en cliquant sur le bouton
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Configuration du bandeau RGPD
tarteaucitron.init({
  privacyUrl:
    "politique-de-confidentialite.html" /* 🔗 Lien vers ta politique de confidentialité */,
  hashtag: "#tarteaucitron" /* Paramètre pour le tracking */,
  cookieName: "tarteaucitron" /* Nom du cookie qui stocke la préférence */,
  orientation: "bottom" /* Position du bandeau (bottom, top, middle, etc.) */,
  showAlertSmall: true /* ✅ Affiche une icône flottante pour modifier les préférences */,
  cookieslist: true /* ✅ Liste des cookies dans la pop-up */,
  adblocker: false /* ✅ Détection d'Adblock */,
  DenyAllCta: true /* ✅ Ajoute un bouton "Tout refuser" */,
  AcceptAllCta: true /* ✅ Ajoute un bouton "Tout accepter" */,
  highPrivacy: true /* ✅ Nécessite un consentement explicite */,
  handleBrowserDNTRequest: false /* ✅ Ne pas prendre en compte le Do Not Track */,
  removeCredit: true /* ✅ Supprime le crédit Tarteaucitron */,
  moreInfoLink: true /* ✅ Affiche un lien "En savoir plus" */,
  useExternalCss: false /* ✅ Permet de personnaliser le design */,
});

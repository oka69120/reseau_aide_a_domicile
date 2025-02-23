import "./bricolage.css";

document.addEventListener("DOMContentLoaded", function () {
  const presentation = document.querySelector(".presentation");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const sectionTop = presentation.getBoundingClientRect().top;
    const triggerPoint = 150; // Distance avant d'activer l'effet

    if (sectionTop < windowHeight - triggerPoint) {
      presentation.classList.add("visible");
    }
  }

  // Détecte le scroll et applique l'effet
  window.addEventListener("scroll", revealOnScroll);

  // Vérifie l'apparition dès le chargement
  revealOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".presentation, .fonctionnement");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const triggerPoint = 150; // Distance avant d'activer l'effet

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - triggerPoint) {
        section.classList.add("visible");
      }
    });
  }

  // Détecte le scroll et applique l'effet
  window.addEventListener("scroll", revealOnScroll);

  // Vérifie l'apparition dès le chargement
  revealOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".presentation, .fonctionnement, .avantages"
  );

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const triggerPoint = 150; // Distance avant d'activer l'effet

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - triggerPoint) {
        section.classList.add("visible");
      }
    });
  }

  // Détecte le scroll et applique l'effet
  window.addEventListener("scroll", revealOnScroll);

  // Vérifie l'apparition dès le chargement
  revealOnScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(
    ".presentation, .fonctionnement, .avantages, .zone"
  );

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const triggerPoint = 150; // Distance avant d'activer l'effet

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - triggerPoint) {
        section.classList.add("visible");
      }
    });
  }

  // Détecte le scroll et applique l'effet
  window.addEventListener("scroll", revealOnScroll);

  // Vérifie l'apparition dès le chargement
  revealOnScroll();
});

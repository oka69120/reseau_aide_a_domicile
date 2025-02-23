import "/src/menage.css";
document.addEventListener("DOMContentLoaded", function () {
  // Animation au scroll (Fade-in)
  const sections = document.querySelectorAll("section");

  function fadeInOnScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Pour afficher les sections visibles au chargement

  // Effet de survol sur les étapes "Comment ça marche ?"
  const etapes = document.querySelectorAll(".etape");

  etapes.forEach((etape) => {
    etape.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease-in-out";
    });

    etape.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Smooth Scroll pour les liens internes
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const zoneSection = document.querySelector(".zone-contenu");

  function handleScroll() {
    const sectionTop = zoneSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      zoneSection.classList.add("visible");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Vérifie si la section est déjà visible au chargement
});
// FAQ
document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq-container details");

  faqs.forEach((faq) => {
    faq.addEventListener("toggle", function () {
      if (this.open) {
        // Fermer les autres questions ouvertes avec un effet fluide
        faqs.forEach((otherFaq) => {
          if (otherFaq !== this && otherFaq.open) {
            otherFaq.open = false;
          }
        });

        // Ajouter un effet de transition fluide
        const content = this.querySelector("p");
        content.style.opacity = "0";
        content.style.maxHeight = "0";
        setTimeout(() => {
          content.style.opacity = "1";
          content.style.maxHeight = "300px";
        }, 10);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq-container details");

  faqs.forEach((faq) => {
    faq.addEventListener("toggle", function () {
      if (this.open) {
        // Fermer les autres questions ouvertes avec effet fluide
        faqs.forEach((otherFaq) => {
          if (otherFaq !== this && otherFaq.open) {
            otherFaq.style.height = `${otherFaq.scrollHeight}px`;
            setTimeout(() => {
              otherFaq.open = false;
            }, 200);
          }
        });

        // Ajouter un effet fluide à l'ouverture
        const content = this.querySelector("p");
        if (content) {
          content.style.opacity = "0";
          setTimeout(() => {
            content.style.opacity = "1";
            content.style.transition = "opacity 0.3s ease-in-out";
          }, 100);
        }
      }
    });
  });
});

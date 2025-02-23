import "./garderie.css";
document.addEventListener("DOMContentLoaded", () => {
  // Effet d'apparition sur la bannière principale
  const hero = document.querySelector(".hero");
  hero.style.opacity = "0";
  hero.style.transform = "translateY(-30px)";
  setTimeout(() => {
    hero.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 200);

  // Effet de révélation au scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  document
    .querySelectorAll(".presentation, .fonctionnement, .tarifs, .faq, .contact")
    .forEach((section) => {
      section.classList.add("hidden");
      observer.observe(section);
    });

  // Effet d'ouverture/fermeture sur la FAQ
  document.querySelectorAll(".faq-container details").forEach((details) => {
    details.addEventListener("click", () => {
      document.querySelectorAll(".faq-container details").forEach((other) => {
        if (other !== details) {
          other.removeAttribute("open");
        }
      });
    });
  });

  // Effet "Ripple" sur les boutons
  document.querySelectorAll(".btn-underline").forEach((button) => {
    button.addEventListener("click", function (e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      let ripple = document.createElement("span");
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});

// Effet presentation
document.addEventListener("DOMContentLoaded", () => {
  const services = document.querySelectorAll(".service");

  // Observer pour l'animation d'apparition
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  services.forEach((service) => {
    service.classList.add("hidden");
    observer.observe(service);
  });

  // Effet au survol (légère élévation)
  services.forEach((service) => {
    service.addEventListener("mouseenter", () => {
      service.style.transform = "scale(1.03)";
    });
    service.addEventListener("mouseleave", () => {
      service.style.transform = "scale(1)";
    });
  });
});

// Fonctionnement
document.addEventListener("DOMContentLoaded", () => {
  const etapes = document.querySelectorAll(".etape");

  // Observer pour l'animation d'apparition
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  etapes.forEach((etape) => {
    etape.classList.add("hidden");
    observer.observe(etape);
  });
});

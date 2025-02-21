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

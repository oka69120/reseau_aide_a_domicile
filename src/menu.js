import "./menu.css";

// Fonction pour inclure un fichier HTML dans un élément donné
function includeHTML(elementId, file, callback) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback(); // Exécuter la fonction après l'insertion
    })
    .catch((error) =>
      console.error(`Erreur lors du chargement de ${file}:`, error)
    );
}

// Charger le header et exécuter le script après
window.onload = function () {
  includeHTML("header-container", "header.html", initMenu); // Charger le menu avant d'exécuter initMenu
  includeHTML("footer-container", "footer.html");
};

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

// Conception du menu

// Fonction qui initialise le menu une fois le header chargé
function initMenu() {
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
}

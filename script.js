const html = document.documentElement;
const langTR = document.getElementById("langTR");
const langEN = document.getElementById("langEN");
const menuToggle = document.getElementById("menuToggle");
const mobilePanel = document.getElementById("mobilePanel");
const navLinks = [...document.querySelectorAll("[data-route]")];

const pages = {
  home: document.getElementById("page-home"),
  theme: document.getElementById("page-home"),
  programme: document.getElementById("page-programme"),
  speakers: document.getElementById("page-speakers"),
  venue: document.getElementById("page-venue"),
  dates: document.getElementById("page-dates"),
  register: document.getElementById("page-register"),
};

function setLanguage(lang) {
  const currentLang = lang === "en" ? "en" : "tr";

  html.classList.remove("lang-tr", "lang-en");
  html.classList.add(currentLang === "en" ? "lang-en" : "lang-tr");

  langTR.classList.toggle("active", currentLang === "tr");
  langEN.classList.toggle("active", currentLang === "en");

  localStorage.setItem("siteLang", currentLang);
}

function setRoute(route, push = true) {
  const target = pages[route] ? route : "home";

  Object.values(pages).forEach((page) => {
    if (page) page.classList.remove("active");
  });

  if (pages[target]) {
    pages[target].classList.add("active");
  }

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.route === target);
  });

  if (push) {
    history.replaceState({}, "", "#" + target);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  mobilePanel.classList.remove("open");
}

langTR.addEventListener("click", () => setLanguage("tr"));
langEN.addEventListener("click", () => setLanguage("en"));

menuToggle.addEventListener("click", () => {
  mobilePanel.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const route = link.dataset.route;
    if (!route) return;

    e.preventDefault();
    setRoute(route);
  });
});

window.addEventListener("load", () => {
  const initialLang = localStorage.getItem("siteLang") || "tr";
  setLanguage(initialLang);

  const hash = window.location.hash.replace("#", "");
  setRoute(hash || "home", false);
});
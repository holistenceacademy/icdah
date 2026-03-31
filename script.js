const html = document.documentElement;
const langTR = document.getElementById("langTR");
const langEN = document.getElementById("langEN");
const menuToggle = document.getElementById("menuToggle");
const mobilePanel = document.getElementById("mobilePanel");

function setLanguage(lang) {
  const currentLang = lang === "en" ? "en" : "tr";

  html.classList.remove("lang-tr", "lang-en");
  html.classList.add(currentLang === "en" ? "lang-en" : "lang-tr");

  if (langTR) langTR.classList.toggle("active", currentLang === "tr");
  if (langEN) langEN.classList.toggle("active", currentLang === "en");

  localStorage.setItem("siteLang", currentLang);
}

if (langTR) {
  langTR.addEventListener("click", () => setLanguage("tr"));
}

if (langEN) {
  langEN.addEventListener("click", () => setLanguage("en"));
}

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener("click", () => {
    mobilePanel.classList.toggle("open");
  });

  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobilePanel.classList.remove("open");
    });
  });
}

window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("siteLang") || "tr";
  setLanguage(savedLang);
});

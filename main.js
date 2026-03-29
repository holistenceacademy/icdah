// Dil Yönetimi
const toggleLang = (lang) => {
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('preferred-lang', lang);
  updateActiveButton(lang);
};

// Sayfa yüklendiğinde tercihi hatırla
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferred-lang') || 'tr';
  toggleLang(savedLang);

  // Scroll animasyonları için Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});

// Geri Sayım Aracı (Countdown)
const countdown = () => {
  const countDate = new Date("December 11, 2026 09:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;

  document.getElementById('days').innerText = Math.floor(gap / day);
  document.getElementById('hours').innerText = Math.floor((gap % day) / hour);
  document.getElementById('minutes').innerText = Math.floor((gap % hour) / minute);
};
setInterval(countdown, 1000);
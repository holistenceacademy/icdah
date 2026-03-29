// ===== LANGUAGE TOGGLE =====
let currentLang = localStorage.getItem('icdah_lang') || 'tr';

// Apply immediately before DOM is fully ready to prevent flash
(function() {
  if (currentLang === 'en') {
    document.documentElement.setAttribute('data-lang', 'en');
    // Will be finalized in DOMContentLoaded
  }
})();

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('icdah_lang', lang);
  document.body.classList.toggle('en', lang === 'en');
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);

  // Language buttons
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // ===== MOBILE MENU =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navRight = document.querySelector('.nav-right');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks?.classList.toggle('open');
      navRight?.classList.toggle('open');
      hamburger.classList.toggle('open');
      // Animate bars
      const bars = hamburger.querySelectorAll('span');
      if (hamburger.classList.contains('open')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '';
        bars[2].style.transform = '';
      }
    });
  }

  // Mobile dropdown toggle
  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // ===== HERO SLIDER =====
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  let timer;

  function goToSlide(n) {
    slides[currentSlide]?.classList.remove('active');
    dots[currentSlide]?.classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide]?.classList.add('active');
    dots[currentSlide]?.classList.add('active');
  }

  function nextSlide() { goToSlide(currentSlide + 1); }
  function prevSlide() { goToSlide(currentSlide - 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5500);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goToSlide(i); startTimer(); });
  });

  document.querySelector('.arrow-next')?.addEventListener('click', () => { nextSlide(); startTimer(); });
  document.querySelector('.arrow-prev')?.addEventListener('click', () => { prevSlide(); startTimer(); });

  if (slides.length > 0) {
    goToSlide(0);
    startTimer();
  }

  // ===== SCROLL ANIMATIONS =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.date-card, .speaker-card, .theme-item, .partner-card, .past-card, .fee-card, .pub-card, .member-item, .session').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // ===== ACTIVE NAV LINK =====
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === path) link.classList.add('active');
  });
});

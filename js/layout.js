// This file provides shared nav/footer HTML
// Included via: <script src="js/layout.js"></script> at top of body
// Then call: document.getElementById('navbar-placeholder').innerHTML = getNavbar();

function getNavbar() {
  return `
<div class="topbar">
  <span class="lang-tr">🔬 Bildirilerinizi bekliyoruz —</span>
  <span class="lang-en">🔬 We are awaiting your papers —</span>
  <a href="https://holivent.com/icdah2026/login/signin?event=icdah2026" target="_blank">
    <span class="lang-tr">Bildiri Gönder</span><span class="lang-en">Submit Paper</span>
  </a>
</div>
<nav class="navbar">
  <a href="index.html" class="nav-logo">ICDAH <span>2026</span></a>
  <ul class="nav-links">
    <li><a href="index.html"><span class="lang-tr">Ana Sayfa</span><span class="lang-en">Home</span></a></li>
    <li class="dropdown">
      <a href="#"><span class="lang-tr">Kongre ▾</span><span class="lang-en">Conference ▾</span></a>
      <div class="dropdown-menu">
        <a href="themes.html"><span class="lang-tr">Temalar</span><span class="lang-en">Themes</span></a>
        <a href="dates.html"><span class="lang-tr">Önemli Tarihler</span><span class="lang-en">Important Dates</span></a>
        <a href="fees.html"><span class="lang-tr">Katılım Ücreti</span><span class="lang-en">Fees</span></a>
        <a href="boards.html"><span class="lang-tr">Kurullar</span><span class="lang-en">Boards</span></a>
        <a href="publishing.html"><span class="lang-tr">Yayın Olanakları</span><span class="lang-en">Publishing</span></a>
        <a href="writing-rules.html"><span class="lang-tr">Yazım Kuralları</span><span class="lang-en">Writing Rules</span></a>
      </div>
    </li>
    <li><a href="speakers.html"><span class="lang-tr">Konuşmacılar</span><span class="lang-en">Speakers</span></a></li>
    <li><a href="program.html">Program</a></li>
    <li><a href="past.html"><span class="lang-tr">Geçmiş Kongreler</span><span class="lang-en">Past Conferences</span></a></li>
  </ul>
  <div class="nav-right">
    <div class="lang-toggle">
      <button data-lang="tr" class="active">TR</button>
      <button data-lang="en">EN</button>
    </div>
    <a href="https://holivent.com/icdah2026/login/signin?event=icdah2026" class="btn-nav" target="_blank">
      <span class="lang-tr">Bildiri Gönder</span><span class="lang-en">Submit Paper</span>
    </a>
  </div>
  <button class="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;
}

function getFooter() {
  return `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo-text">ICDAH <span>2026</span></div>
        <p class="footer-desc lang-tr">7. Uluslararası Farklı Boyutlarıyla Sağlık Konferansı — Çanakkale, Türkiye. Hibrit olarak gerçekleştirilecek bu konferans, sağlık alanında disiplinlerarası çalışmaları bir araya getirmektedir.</p>
        <p class="footer-desc lang-en block">7th International Conference on Different Aspects of Health — Çanakkale, Turkey. This hybrid conference brings together interdisciplinary work in the field of health.</p>
        <div class="footer-contact">
          📧 <a href="mailto:yasamkalitesidernegi@gmail.com">yasamkalitesidernegi@gmail.com</a><br>
          📱 <a href="tel:+905397024400">+90 539 702 4400</a><br>
          📍 Namık Kemal Mah., Helvacıoğlu Sok. No:19-21/A, 17000 Çanakkale
        </div>
      </div>
      <div class="footer-col">
        <h4><span class="lang-tr">Sayfalar</span><span class="lang-en">Pages</span></h4>
        <ul class="footer-links">
          <li><a href="themes.html"><span class="lang-tr">Temalar</span><span class="lang-en">Themes</span></a></li>
          <li><a href="dates.html"><span class="lang-tr">Önemli Tarihler</span><span class="lang-en">Important Dates</span></a></li>
          <li><a href="fees.html"><span class="lang-tr">Katılım Ücreti</span><span class="lang-en">Fees</span></a></li>
          <li><a href="boards.html"><span class="lang-tr">Kurullar</span><span class="lang-en">Boards</span></a></li>
          <li><a href="publishing.html"><span class="lang-tr">Yayın Olanakları</span><span class="lang-en">Publishing</span></a></li>
          <li><a href="writing-rules.html"><span class="lang-tr">Yazım Kuralları</span><span class="lang-en">Writing Rules</span></a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><span class="lang-tr">Diğer</span><span class="lang-en">Other</span></h4>
        <ul class="footer-links">
          <li><a href="speakers.html"><span class="lang-tr">Konuşmacılar</span><span class="lang-en">Speakers</span></a></li>
          <li><a href="program.html">Program</a></li>
          <li><a href="past.html"><span class="lang-tr">Geçmiş Kongreler</span><span class="lang-en">Past Conferences</span></a></li>
          <li><a href="https://holivent.com/icdah2026/login/signin?event=icdah2026" target="_blank"><span class="lang-tr">Bildiri Gönder</span><span class="lang-en">Submit Paper</span></a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      © 2026 ICDAH — <span class="lang-tr">Yaşam Kalitesi Derneği (YAKALDER). Tüm hakları saklıdır.</span>
      <span class="lang-en block">Yaşam Kalitesi Derneği (YAKALDER). All rights reserved.</span>
    </div>
  </div>
</footer>`;
}

document.addEventListener('DOMContentLoaded', function() {
  const navEl = document.getElementById('navbar-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = getNavbar();
  if (footEl) footEl.innerHTML = getFooter();
});

// Swap CSS placeholders for real images when they exist
(function() {
  const hero = document.querySelector('.hero-bg');
  if (hero) {
    const probe = new Image();
    probe.onload = () => hero.classList.add('has-image');
    probe.src = 'img/hero.png';
  }
  document.querySelectorAll('[data-bg]').forEach(el => {
    const src = el.dataset.bg;
    const probe = new Image();
    probe.onload = () => {
      el.style.backgroundImage = `url('${src}')`;
      el.classList.add('has-image');
    };
    probe.src = src;
  });
})();

// Nav background opacity on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Beta form fake submit
const form = document.getElementById('betaForm');
const status = document.getElementById('betaStatus');
if (form && status) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input').value;
    status.textContent = '// HANDLE LOGGED. WAIT FOR SIGNAL.';
    form.reset();
  });
}

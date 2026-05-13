const nav = document.querySelector('.nav');
let scrolled = false;
window.addEventListener('scroll', () => {
  const next = window.scrollY > 60;
  if (next !== scrolled) {
    scrolled = next;
    nav.classList.toggle('scrolled', scrolled);
  }
}, { passive: true });

const form = document.getElementById('betaForm');
const status = document.getElementById('betaStatus');
if (form && status) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = '// HANDLE LOGGED. WAIT FOR SIGNAL.';
    form.reset();
  });
}

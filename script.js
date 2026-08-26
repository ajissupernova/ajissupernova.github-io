const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.side-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', event => {
  if (glow) {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const isInternalPage = href => {
  if (!href) return false;
  if (href.startsWith('#')) return false;
  if (href.startsWith('mailto:')) return false;
  if (href.startsWith('tel:')) return false;
  if (href.startsWith('http://') || href.startsWith('https://')) return false;
  if (href.startsWith('javascript:')) return false;
  return true;
};

document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (!isInternalPage(href)) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    document.body.classList.add('page-leaving');

    window.setTimeout(() => {
      window.location.href = href;
    }, 430);
  });
});

window.addEventListener('pageshow', () => {
  document.body.classList.remove('page-leaving');
});

// Menu mobile toggle
const toggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Sombra do header ao rolar
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 4px 18px rgba(0,0,0,.12)'
    : '0 2px 12px rgba(0,0,0,.06)';
});

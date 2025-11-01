window.addEventListener('load', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.animation = 'navbar-slide-in 0.6s ease-out forwards';
});

document.querySelector('.navbar__toggle').addEventListener('click', () => {
  document.querySelector('.navbar__menu').classList.toggle('navbar__menu--active');
});
// ==================== SHOW MENU ====================
const primaryNav = document.getElementById('primary-navigation'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');


// ===== MENU SHOW =====
navToggle.addEventListener('click', () => {
  primaryNav.setAttribute('data-visible', true);
});

// ===== MENU CLOSE =====
navClose.addEventListener('click', () => {
  primaryNav.setAttribute('data-visible', false);
});

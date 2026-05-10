/**
 * Karisimbi Montessori School
 * Main Entry Point - Non-Module Version for File Protocol
 */

(function() {
  function initMobileMenu() {
    const hamburger = document.querySelector('.nav-hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (!hamburger || !navLinks) {
      console.log('Mobile menu elements not found');
      return;
    }

    console.log('Mobile menu elements found:', { hamburger, navLinks });

    hamburger.addEventListener('click', () => {
      console.log('Hamburger clicked!');
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      console.log('Classes after toggle:', {
        hamburger: hamburger.classList.toString(),
        navLinks: navLinks.classList.toString()
      });
    });

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });

    console.log('Mobile menu module ready');
  }

  document.addEventListener('DOMContentLoaded', () => {
    console.log('Karisimbi School site initialized');
    initMobileMenu();
  });
})();

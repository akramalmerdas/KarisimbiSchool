/**
 * Mobile Menu Module
 */

export function initMobileMenu() {
  console.log('initMobileMenu() called');
  
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  console.log('hamburger element:', hamburger);
  console.log('navLinks element:', navLinks);

  if (!hamburger || !navLinks) {
    console.error('Mobile menu elements not found!');
    return;
  }

  // Toggle menu on hamburger click
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Hamburger clicked!');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    console.log('After toggle - hamburger active:', hamburger.classList.contains('active'));
    console.log('After toggle - navLinks active:', navLinks.classList.contains('active'));
  });

  // Close menu when a nav item is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  console.log('Mobile menu module ready');
}

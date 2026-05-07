/**
 * Karisimbi Montessori School
 * Main Entry Point (No Module - For Debugging)
 */

console.log('Simple script loaded!');

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Ready - Simple test');
  
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');

  console.log('Simple test - hamburger:', hamburger);
  console.log('Simple test - navLinks:', navLinks);

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('Simple test - HAMBURGER CLICKED!');
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
});

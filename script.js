document.addEventListener('DOMContentLoaded', () => {
  const menuCheckbox = document.getElementById('click');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Close mobile menu after clicking a link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (menuCheckbox) menuCheckbox.checked = false;
    });
  });

  // Reset menu state on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 920 && menuCheckbox) {
      menuCheckbox.checked = false;
    }
  });
});

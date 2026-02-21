function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");

  // Accessibility signal for screen readers
  icon.setAttribute("aria-expanded", isOpen);
}

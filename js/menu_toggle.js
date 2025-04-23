document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const icon = document.getElementById("menu-icon");
    const navLinks = document.getElementById("nav-links");
    const overlay = document.getElementById("overlay");
  
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      overlay.classList.toggle("show");
      toggle.classList.toggle("active");
    });
  
    overlay.addEventListener("click", () => {
      navLinks.classList.remove("show");
      overlay.classList.remove("show");
      toggle.classList.remove("active");
    });
  
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        overlay.classList.remove("show");
        toggle.classList.remove("active");
      });
    });
  });
  

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;
    const bottomOfPage = window.innerHeight + scrollY >= document.body.offsetHeight - 2;

    if (scrollY > 50) {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      // Si estamos al final de la página, forzamos a que "contacto" esté activo
      if (bottomOfPage) {
        current = "contacto";
      }
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (current && link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });


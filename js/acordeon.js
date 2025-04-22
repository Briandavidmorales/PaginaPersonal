const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;

      if (item.classList.contains("active")) {
        // Cierra el actual
        content.style.height = content.scrollHeight + "px"; // fuerza altura para animar desde ahí
        requestAnimationFrame(() => {
          content.style.height = "0";
        });
        item.classList.remove("active");
      } else {
        // Cierra otros
        document.querySelectorAll(".accordion-item.active").forEach(openItem => {
          openItem.classList.remove("active");
          const openContent = openItem.querySelector(".accordion-content");
          openContent.style.height = openContent.scrollHeight + "px";
          requestAnimationFrame(() => {
            openContent.style.height = "0";
          });
        });

        // Abre el clickeado
        item.classList.add("active");
        content.style.height = content.scrollHeight + "px";

        // Limpia la altura al finalizar la transición para que crezca con contenido
        content.addEventListener("transitionend", () => {
          if (item.classList.contains("active")) {
            content.style.height = "auto";
          }
        }, { once: true });
      }
    });
  });
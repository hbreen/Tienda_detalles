document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.getElementById("carrusel");
    let scrollAmount = 0;
  
    function desplazarCarrusel() {
      scrollAmount += 250; // Desplaza 250px cada vez (tamaño de un elemento)
      if (scrollAmount >= carrusel.scrollWidth - carrusel.offsetWidth) {
        scrollAmount = 0; // Reinicia cuando alcanza el final
      }
      carrusel.scrollTo({
        left: scrollAmount,
        behavior: "smooth" // Movimiento suave
      });
    }
  
    // Ejecuta el desplazamiento automático cada 2 segundos
    setInterval(desplazarCarrusel, 2000);
    
  });
  
  
  
  
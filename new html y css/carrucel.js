document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.getElementById("carrusel");
    let autoScrollInterval;
    const desplazamientoPx = 250;
    const velocidadAutoScroll = 2000;
    const esperaReactivacion = 3000;

    function desplazarCarrusel() {
        carrusel.scrollLeft += desplazamientoPx;
        if (carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.offsetWidth) {
            carrusel.scrollLeft = 0;
        }
    }

    function iniciarAutoScroll() {
        detenerAutoScroll();
        autoScrollInterval = setInterval(desplazarCarrusel, velocidadAutoScroll);
    }

    function detenerAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    function reiniciarAutoScroll() {
        detenerAutoScroll();
        setTimeout(iniciarAutoScroll, esperaReactivacion);
    }

    // Navegación con teclado
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            carrusel.scrollLeft -= desplazamientoPx;
            reiniciarAutoScroll();
        }
        if (event.key === "ArrowRight") {
            carrusel.scrollLeft += desplazamientoPx;
            reiniciarAutoScroll();
        }
    });

    // Navegación táctil
    let touchStartX = 0;
    carrusel.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
    });

    carrusel.addEventListener("touchend", (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX;

        if (deltaX > 50) {
            carrusel.scrollLeft -= desplazamientoPx;
        } else if (deltaX < -50) {
            carrusel.scrollLeft += desplazamientoPx;
        }

        reiniciarAutoScroll();
    });

    iniciarAutoScroll();
});
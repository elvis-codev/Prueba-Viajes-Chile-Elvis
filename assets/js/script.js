

//Cambiar de color NAVBAR al hacer scroll - créditos: https://www.youtube.com/watch?v=z70GTU3p72I
const navEl = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56) {
        navEl.classList.remove('navbar-scrolled');
    }
});


//Tooltip - Mensaje al acercar el cursor
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);


//Carousel - Cambia imagen en un intervalo de tiempo
const myCarouselElement = document.querySelector('carousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000
})



const indicadores = document.querySelectorAll('.indicador');
const imagenes = document.querySelector('.imagenes');
const imagenesArray = document.querySelectorAll('.imagenes img');

let contador = 0;

function actualizarFiltros() {
    imagenesArray.forEach((img, index) => {
        if (index !== contador) {
            img.style.filter = 'blur(5px)'; // Las imágenes fuera de foco tienen desenfoque
            img.style.transform = 'scale(0.90)'
        }
        if (index === contador) {
            img.style.filter = 'none'; // La imagen en el foco no tiene filtro
            img.style.transform = 'scale(1.2)'
        }
    });
}

// Cambiar de imagen cada 2 segundos
setInterval(() => {
    contador = (contador + 1) % 4;
    imagenes.style.transform = `translateX(-${contador * 300}px)`; // Mover las imágenes
    actualizarFiltros();
}, 2500); // Intervalo de 2 segundos

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// Cambiar el estado del menú al hacer clic en el botón
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

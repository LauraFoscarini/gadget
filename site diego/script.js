var images = document.querySelectorAll('.banner img');
var currentIndex = 0;

function rotateImages() {
 images[currentIndex].classList.remove('active');
 currentIndex = (currentIndex + 1) % images.length;
 images[currentIndex].classList.add('active');
}

setInterval(rotateImages, 3000);

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Aqui você pode adicionar outras lógicas de alternância de estilos para o modo escuro, se necessário.
});


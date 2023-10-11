// Obtém os elementos HTML usando seus IDs
const video = document.getElementById('trailer'); // Obtém o elemento de vídeo
const overlay = document.getElementById('videoOverlay'); // Obtém a sobreposição do vídeo
const openTrailer = document.getElementById('openTrailer'); // Obtém o botão para abrir o vídeo
const closeButton = document.getElementById('closeTrailer'); // Obtém o botão para fechar o vídeo

// Função para reiniciar o vídeo
function reiniciarVideo() {
    video.currentTime = 0; // Define o tempo do vídeo de volta para o início
    video.play(); // Inicia o vídeo
}

// Define um evento de clique no botão "Assista ao trailer"
openTrailer.addEventListener('click', function () {
    overlay.style.display = 'block'; // Exibe a sobreposição
    video.style.display = 'block'; // Exibe o elemento de vídeo
    reiniciarVideo(); // Chama a função para reiniciar o vídeo
    closeButton.style.display = 'block'; // Exibe o botão para fechar o vídeo
});

// Define um evento de clique no botão "Fechar"
closeButton.addEventListener('click', function () {
    video.pause(); // Pausa o vídeo
    overlay.style.display = 'none'; // Oculta a sobreposição
    closeButton.style.display = 'none'; // Oculta o botão para fechar o vídeo
});

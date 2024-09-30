console.log("page loaded...");
// Función para reproducir el video
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos de video
    var videos = document.querySelectorAll("video");

    // Agregar evento de mouseover y mouseout a cada video
    videos.forEach(function(video) {
        video.addEventListener("mouseover", function() {
            playVideo(video);
        });

        video.addEventListener("mouseout", function() {
            pauseVideo(video);
        });
    });

    // Función para reproducir el video
    function playVideo(video) {
        if (video.paused) {
            video.play();
        }
    }

    // Función para pausar el video
    function pauseVideo(video) {
        if (!video.paused) {
            video.pause();
        }
    }
});


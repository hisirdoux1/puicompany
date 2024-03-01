document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    body.style.opacity = 0;
    body.style.transition = 'opacity 1.062s';

    window.onload = () => {
        body.style.opacity = 1;
    };

    
    const youtubeLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

   
    const navigateToYouTubeLink = () => {
        window.open(youtubeLink, '_blank');
    };


    const clickableElements = document.querySelectorAll('a, button');

    clickableElements.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault(); 
            navigateToYouTubeLink();
        });
    });
});

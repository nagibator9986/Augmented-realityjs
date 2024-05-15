document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-ar');
    const arScenes = document.querySelectorAll('.ar-scene');

    toggleButton.addEventListener('click', function() {
        arScenes.forEach(scene => {
            if (scene.style.display === 'none') {
                scene.style.display = 'block';
            } else {
                scene.style.display = 'none';
            }
        });
    });
});

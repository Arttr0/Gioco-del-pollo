function checkOrientation() {
    if(window.innerHeight < window.innerWidth) {
        // Горизонтальная ориентация
        document.getElementById('unity-canvas').style.display = 'none';
        document.getElementById('orientation-warning').style.display = 'block';
    } else {
        // Портретная ориентация
        document.getElementById('unity-canvas').style.display = 'block';
        document.getElementById('orientation-warning').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

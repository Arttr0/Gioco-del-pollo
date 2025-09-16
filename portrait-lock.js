function checkOrientation() {
    // Ширина окна
    var w = window.innerWidth;
    var h = window.innerHeight;

    if ((isMobile() && h < w) || w > 1080) {
        // Горизонталь на мобилке или слишком широкий экран
        canvas.style.display = 'none';
        loadingBar.style.display = 'none';
        warningBanner.style.display = 'none';
        document.getElementById('orientation-warning').style.display = 'block';
        document.getElementById('orientation-warning').innerHTML = 
            (w > 1080) ? "Ширина экрана слишком большая для игры" : "Пожалуйста, поверните устройство вертикально";
    } else {
        // Портретная ориентация и ширина ≤1080
        canvas.style.display = 'block';
        loadingBar.style.display = 'block';
        warningBanner.style.display = 'block';
        document.getElementById('orientation-warning').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

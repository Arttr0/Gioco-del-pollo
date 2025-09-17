function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function checkOrientation() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    var canvas = document.getElementById('canvas');
    var loadingBar = document.getElementById('loadingBar');
    var warningBanner = document.getElementById('warningBanner');

    var orientationWarning = document.getElementById('orientation-warning');

    if ((isMobile() && h < w) || w > 1080) {
        // Горизонтальная ориентация на мобилке или слишком широкий экран
        if (canvas) canvas.style.display = 'none';
        if (loadingBar) loadingBar.style.display = 'none';
        if (warningBanner) warningBanner.style.display = 'none';

        if (orientationWarning) {
            orientationWarning.style.display = 'block';
            orientationWarning.innerHTML = (w > 1080) 
                ? "Screen width is too large for optimal gameplay. Please resize your browser or use a mobile device in portrait mode."
                : "Please rotate your device to portrait orientation for the best experience.";
        }
    } else {
        if (canvas) canvas.style.display = 'block';
        if (loadingBar) loadingBar.style.display = 'block';
        if (warningBanner) warningBanner.style.display = 'block';

        if (orientationWarning) {
            orientationWarning.style.display = 'none';
        }
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

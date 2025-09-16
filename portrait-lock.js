function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function checkOrientation() {
    if(isMobile() && window.innerHeight < window.innerWidth) {
        // Горизонтальная ориентация на мобилке
        canvas.style.display = 'none';
        loadingBar.style.display = 'none';
        warningBanner.style.display = 'none';
        document.getElementById('orientation-warning').style.display = 'block';
    } else {
        // Портретная ориентация или ПК
        canvas.style.display = 'block';
        loadingBar.style.display = 'block';
        warningBanner.style.display = 'block';
        document.getElementById('orientation-warning').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

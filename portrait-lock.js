function checkOrientation() {
    // Window width and height
    var w = window.innerWidth;
    var h = window.innerHeight;

    if ((isMobile() && h < w) || w > 1080) {
        // Landscape on mobile or too wide screen
        canvas.style.display = 'none';
        loadingBar.style.display = 'none';
        warningBanner.style.display = 'none';
        document.getElementById('orientation-warning').style.display = 'block';
        document.getElementById('orientation-warning').innerHTML = (w > 1080) 
            ? "Screen width is too large for the game" 
            : "Please rotate your device vertically or resize the browser window to fit your mobile device.";
    } else {
        // Portrait orientation and width ≤1080
        canvas.style.display = 'block';
        loadingBar.style.display = 'block';
        warningBanner.style.display = 'block';
        document.getElementById('orientation-warning').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

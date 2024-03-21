document.addEventListener('mousemove', function (event) {
    var parallaxContainer = document.getElementById('parallax-container');
    var rect = parallaxContainer.getBoundingClientRect();
    var speedFactor = 0.05;
    var mouseY = event.clientY - rect.top;
    var translateYMax = 200;
    var translateYMin = -200;
    var translateY = -(mouseY * speedFactor);

    translateY = Math.min(translateY, translateYMax);
    translateY = Math.max(translateY, translateYMin);
    document.querySelector('.top-layer').style.transform = 'translateY(' + translateY + 'px)';
});
document.getElementById('accept-button').addEventListener('click', function() {
    window.location.href = 'love.html'; 
});

document.getElementById('reject-button').addEventListener('click', function() {
    const button = this;
    button.style.position = 'absolute';
    button.style.top = Math.random() * window.innerHeight + 'px';
    button.style.left = Math.random() * window.innerWidth + 'px';
});

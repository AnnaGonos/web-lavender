window.addEventListener('beforeunload', function() {
    document.getElementById('loader').style.display = 'flex';
});

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 5000);
});
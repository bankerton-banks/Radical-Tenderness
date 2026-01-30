window.onload = function() {
    alert('Script is running!');
    
    const blackEnvelope = document.querySelector('.image1');
    alert('Found envelope: ' + (blackEnvelope !== null));
    
    if (blackEnvelope) {
        blackEnvelope.onclick = function() {
            alert('Clicked!');
            this.src = "images/pink.svg";
            this.style.transition = 'all 1s ease-in-out';
            this.style.top = '70px';
            this.style.left = '500px';
            this.style.width = '1000px';
        };
    }
};
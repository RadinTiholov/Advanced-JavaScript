function attachGradientEvents() {
    let resultElement = document.getElementById('result');
    let gradientElement = document.getElementById('gradient');
    document.addEventListener('mousemove', getStats);

    function getStats(e){
        if (e.target.id == 'gradient') {
            let power = e.offsetX / (e.target.clientWidth - 1);
            power = Math.trunc(power * 100);
            resultElement.textContent = power + '%';
        }
    }
}
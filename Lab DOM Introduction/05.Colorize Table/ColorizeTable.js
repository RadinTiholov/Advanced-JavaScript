function colorize() {
    const names = document.querySelectorAll('tr');
    for (let i = 0; i < names.length; i++) {
        if (i % 2 == 1) {
            names[i].style.backgroundColor = 'teal';
        }
    }
}
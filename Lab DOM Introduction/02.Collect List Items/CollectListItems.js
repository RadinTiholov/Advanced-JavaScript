function extractText() {
    const elements = document.querySelectorAll('li');
    const result = document.getElementById('result');
    for (const element of elements) {
        result.textContent += element.textContent + '\n';
    }
}
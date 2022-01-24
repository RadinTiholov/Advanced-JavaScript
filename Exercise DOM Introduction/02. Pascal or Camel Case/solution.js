function solve() {
    const text = document.getElementById('text');
    const convention = document.getElementById('naming-convention');
    const result = document.getElementById('result');
    let resultText = '';
    let words = text.value.split(' ');
    if (convention.value == 'Camel Case') {
      for (let i = 0; i < words.length; i++) {
        if (i == 0) {
            resultText += words[i].toLowerCase();
        }
        else{
            resultText += words[i][0].toUpperCase() + words[i].substring(1, words[i].length).toLowerCase();
        }
      }
    }
    else if (convention.value == 'Pascal Case') {
      for (let i = 0; i < words.length; i++) {
          resultText += words[i][0].toUpperCase() + words[i].substring(1, words[i].length).toLowerCase();
      }
    }
    else{
      resultText = 'Error!';
    }
    result.textContent = resultText;
}
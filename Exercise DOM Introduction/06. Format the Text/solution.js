function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');
  let sentences = input.split('.');
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i] === '') {
      sentences[i-1]+='.';
    }
  }
  output.innerText = '';
  if (sentences.length <= 3) {
    output.innerHTML += `<p>${input}</p>`;
  }
  else{
    let text = '';
    for (let i = 1; i <= sentences.length+1; i++) {
      if (i % 3 === 0) {
        output.innerHTML += `<p>${text}</p>`;
        text = '';
      }
      else{
        text += sentences[i-1];
      }
    }
  }
}
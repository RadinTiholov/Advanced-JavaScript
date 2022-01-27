function solve() {
  const input = document.querySelectorAll('textarea')[0];
  const resultArea = document.querySelectorAll('textarea')[1];
  const generataButton = document.querySelectorAll('button')[0];
  const buyButton = document.querySelectorAll('button')[1];
  generataButton.addEventListener('click', onClickButton);
  buyButton.addEventListener('click', onBuyButton);

  function onClickButton(e){
    console.log(input.value);
    let info = JSON.parse(input.value);
    for (const obj of info) {
      const tr = document.createElement('tr');

      const tdImage = document.createElement('td');
      const image = document.createElement('img');
      image.src = obj.img;
      tdImage.appendChild(image);

      const tdParagraf = document.createElement('td');
      const pName = document.createElement('p');
      pName.textContent = obj.name;
      tdParagraf.appendChild(pName);

      const tdPrice = document.createElement('td');
      const pPrice = document.createElement('p');
      pPrice.textContent = obj.price;
      tdPrice.appendChild(pPrice);

      const tdFactor = document.createElement('td');
      const pFactor = document.createElement('p');
      pFactor.textContent = obj.decFactor;
      tdFactor.appendChild(pFactor);

      const tdInput = document.createElement('td');
      const input = document.createElement('input');
      input.type = 'checkbox';
      //input.disabled= true;
      tdInput.appendChild(input);

      tr.appendChild(tdImage);
      tr.appendChild(tdParagraf);
      tr.appendChild(tdPrice);
      tr.appendChild(tdFactor);
      tr.appendChild(tdInput);

      const tbody = document.querySelectorAll('tbody')[0];
      tbody.appendChild(tr);
    }
  }

  function onBuyButton(e){
    const products = [];
    let totalPrice = 0;
    let decFactor = 0;
    let count = 0;
    const radioButtons = Array.from(document.querySelectorAll('input'));
    radioButtons.forEach(element => {
      if (element.checked) {
        products.push(element.parentElement.parentElement.childNodes[1].textContent);
        totalPrice += Number(element.parentElement.parentElement.childNodes[2].textContent);
        decFactor += Number(element.parentElement.parentElement.childNodes[3].textContent);
        count += 1;
      }
    });
    decFactor = decFactor/count;
    resultArea.value += `Bought furniture: ${products.join(', ')}\n`;
    resultArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    resultArea.value += `Average decoration factor: ${decFactor}`;
  }
}
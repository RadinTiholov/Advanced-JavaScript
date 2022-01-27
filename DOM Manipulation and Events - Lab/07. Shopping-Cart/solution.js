function solve() {
   const resultElement = document.querySelector('textarea');
   const buttons = Array.from(document.querySelectorAll('.add-product'));
   const checkoutButton = document.querySelector('.checkout');

   checkoutButton.addEventListener('click', checkOut);
   let price = 0;
   let list = [];   buttons.forEach(button => {
      button.addEventListener('click', onClick);
   });

   function onClick(e){
      const product = e.target.parentElement.parentElement.childNodes[3].childNodes[1].innerText;
      const money = e.target.parentElement.parentElement.childNodes[7].innerText;
      if (!list.includes(product)) {
         list.push(product);
      }
      resultElement.textContent += `Added ${product} for ${money} to the cart.\n`;
      price += Number(money);
   }
   function checkOut(e){
      resultElement.textContent += `You bought ${list.join(', ')} for ${price.toFixed(2)}.`
      buttons.forEach(button => {
         button.disabled = true;
      });
      checkoutButton.disabled = true;
   }
}
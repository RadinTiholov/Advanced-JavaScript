function search() {
   let towns = document.querySelectorAll('li');
   const text = document.getElementById('searchText');
   let result = document.getElementById('result');
   let count = 0;
   for (const town of towns) {
      if (town.textContent.includes(text.value)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         count++;
      }
   }
   result.textContent = `${count} matches found`;
}

function create(words) {
   const contentElement = document.getElementById('content');
   let divs = [];
   for (let i = 0; i < words.length; i++) {
      const paragraf = document.createElement('p');
      paragraf.textContent = words[i];
      paragraf.style.display = 'none';

      const div = document.createElement('div');
      div.addEventListener('click', showParagraf);
      div.appendChild(paragraf);
      divs.push(div);
   }
   divs.forEach(element => {
      contentElement.appendChild(element);
   });

   function showParagraf(e){
      console.log(e.target.firstChild);
      e.target.firstChild.style.display = 'inline';
   }
}
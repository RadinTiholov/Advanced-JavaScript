function addItem() {
    

    const inputValue = document.getElementById('newItemText').value;
    let itemsElement = document.getElementById('items');
    let newListElement = document.createElement('li');
    itemsElement.addEventListener('click', deleteItem)

    newListElement.innerHTML = `${inputValue} <a href="#">[Delete]</a>`;

    itemsElement.appendChild(newListElement);
    function deleteItem(e){
        let row = e.target.parentNode;
        row.remove();
    }
}
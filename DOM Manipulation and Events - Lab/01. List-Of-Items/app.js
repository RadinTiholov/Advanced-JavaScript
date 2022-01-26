function addItem() {
    const inputValue = document.getElementById('newItemText').value;
    let itemsElement = document.getElementById('items');
    let newListElement = document.createElement('li');
    newListElement.textContent = inputValue;

    itemsElement.appendChild(newListElement);
}
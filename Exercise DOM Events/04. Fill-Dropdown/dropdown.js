function addItem() {
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const text = newItemText.value;
    const value = newItemValue.value;

    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    document.getElementById('menu').appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
}


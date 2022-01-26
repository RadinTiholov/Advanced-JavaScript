function deleteByEmail() {
    const inputText = document.querySelector("input[name ='email']").value;
    const result = document.getElementById('result');
    console.log(inputText);
    const emailElements = Array.from(document.querySelectorAll('tr td:nth-child(2)'));
    let found = false;
    for (const element of emailElements) {
        if (element.textContent.includes(inputText)) {
            element.parentElement.remove();
            result.textContent = 'Deleted.';
            found = true;
            break;
        }
    }
    if (!found) {
        result.textContent = 'Not found.';
    }
}
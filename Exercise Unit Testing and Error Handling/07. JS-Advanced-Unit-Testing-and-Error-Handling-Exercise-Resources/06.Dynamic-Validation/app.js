function validate() {
    const textInput = document.getElementById('email');
    const regex = new RegExp('[a-z]+@[a-z]+\.[a-z]+');

    textInput.addEventListener('change', isValid);

    function isValid(){
        if (!regex.test(textInput.value)) {
            textInput.classList.add('error');
        }
        else{
            textInput.classList.remove('error');
        }
    }
}
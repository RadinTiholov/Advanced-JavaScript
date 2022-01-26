function validate() {

    const emailElement = document.getElementById('email');
    emailElement.addEventListener('change', error);

    function error(e) {
        const regex = new RegExp(/\w+@\w+\.\w+/);
        if(!(regex.test(emailElement.value))) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    }
}
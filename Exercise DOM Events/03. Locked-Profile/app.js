function lockedProfile() {
    const divElements = Array.from(document.querySelectorAll('.profile'));
    for (const element of divElements) {
        element.childNodes[20].addEventListener('click', showMore);
    }
    function showMore(e){

        if (e.target.parentElement.childNodes[9].checked) {
            if (e.target.textContent === 'Show more') { 
                e.target.parentElement.childNodes[18].style.display = 'inline';
                e.target.textContent = 'Hide it';
            }
            else if(e.target.textContent === 'Hide it'){
                e.target.parentElement.childNodes[18].style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}
function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const daysButton = document.getElementById('daysBtn');
    const hoursButton = document.getElementById('hoursBtn');
    const minutesButton = document.getElementById('minutesBtn');
    const secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', dayCalc);
    hoursButton.addEventListener('click', hoursCalc);
    minutesButton.addEventListener('click', minutesCalc);
    secondsButton.addEventListener('click', secondsCalc);

    function dayCalc(){
        const days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 24 * 60;
        secondsInput.value = days * 24* 60 * 60;
    }
    function hoursCalc(){
        const hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    }
    function minutesCalc(){
        const minutes = minutesInput.value;
        daysInput.value = minutes / 60 / 24;
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    }
    function secondsCalc(){
        const seconds = secondsInput.value;
        daysInput.value = seconds/60 / 60 / 24;
        hoursInput.value = seconds / 60/60;
        minutesInput.value = seconds/60;
    }
}
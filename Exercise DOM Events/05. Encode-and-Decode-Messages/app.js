function encodeAndDecodeMessages() {
    const firstTextArea = document.querySelectorAll('textarea')[0];
    const secondTextArea = document.querySelectorAll('textarea')[1];
    const encodeButton = document.querySelectorAll('button')[0];
    const decodeButton = document.querySelectorAll('button')[1];
    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode(){
        let message = firstTextArea.value;
        message = message.split('').map(x => {
            let ascii = x.charCodeAt(0);
            ascii++;
            return String.fromCharCode(ascii);
        }).join('');
        firstTextArea.value = null;
        secondTextArea.value = message;
    }
    function decode(){
        let message = secondTextArea.value;
        message = message
        .split('')
        .map(x => {

            let ascii = x.charCodeAt(0);
            ascii--;
            return String.fromCharCode(ascii);

        }).join('');
        secondTextArea.value = message;
    }
}
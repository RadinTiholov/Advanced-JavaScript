function attachEventsListeners() {
    const button = document.getElementById('convert');
    button.addEventListener('click', convert);

    const outputElement = document.getElementById('outputDistance');
    function convert(e){

        const typeOfDistanceToConvert = document.getElementById('inputUnits').value;
        let distanceToConvert = Number(document.getElementById('inputDistance').value);
        
        switch(typeOfDistanceToConvert) {
            case 'km':
                distanceToConvert *= 1000;
                break;
            case 'cm':
                distanceToConvert /= 100;
                break;
            case 'mm':
                distanceToConvert = distanceToConvert / 100 / 10;
                break;
            case 'mi':
                distanceToConvert *= 1609.34; 
                break;
            case 'yrd':
                distanceToConvert *= 0.9144;
                break;
            case 'ft':
                distanceToConvert *= 0.3048;
                break;
            case 'in':
                distanceToConvert *= 0.0254;
                break;
        }

        const typeOfDistanceToConvertInto = document.getElementById('outputUnits').value;

        switch(typeOfDistanceToConvertInto) {
            case 'km':
                distanceToConvert /= 1000;
                break;
            case 'cm':
                distanceToConvert *= 100;
                break;
            case 'mm':
                distanceToConvert = distanceToConvert * 100 * 10;
                break;
            case 'mi':
                distanceToConvert /= 1609.34; 
                break;
            case 'yrd':
                distanceToConvert /= 0.9144;
                break;
            case 'ft':
                distanceToConvert /= 0.3048;
                break;
            case 'in':
                distanceToConvert /= 0.0254;
                break;
        }
        outputElement.value = distanceToConvert;
    }
}
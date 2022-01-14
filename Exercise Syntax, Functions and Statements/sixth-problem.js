function speedLimit(speed, area){
    let writeMessage = (limit, speed) => {
        let status = '';
        if (speed - limit <= 20) {
            status = 'speeding';
        }
        else if (speed - limit <= 40) {
            status = 'excessive speeding';
        }
        else{
            status = 'reckless driving';
        }
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
    switch (area) {
        case 'motorway':
            if (speed > 130) {
                const limit = 130;
                writeMessage(limit, speed);
            }
            else{
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }
            break;
        case 'interstate':
            if (speed > 90) {
                const limit = 90;
                writeMessage(limit, speed);
            }
            else{
                console.log(`Driving ${speed} km/h in a 90 zone`);
            }
            break;
        case 'city':
            if (speed > 50) {
                const limit = 50;
                writeMessage(limit, speed);
            }
            else{
                console.log(`Driving ${speed} km/h in a 50 zone`);
            }
            break;
        case 'residential':
            if (speed > 20) {
                const limit = 20;
                writeMessage(limit, speed);
                
            }
            else{
                console.log(`Driving ${speed} km/h in a 20 zone`);
            }
            break;
        default:
            break;
    }
}

speedLimit(21, 'residential');
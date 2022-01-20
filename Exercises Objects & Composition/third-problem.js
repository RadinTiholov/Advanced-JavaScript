function solve(requirments){
    let car = {model: requirments.model};
    if (requirments.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800 
        };
    }
    else if (requirments.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400 
        };
    }
    else if (requirments.power <= 200) {
        car.engine = {
            power: 200,
            volume: 3500 
        };
    }
    car.carriage = {
        type: requirments.carriage,
        color: requirments.color
    }
    car.wheels = [];
    for (let i = 0; i < 4; i++) {
        car.wheels.push(requirments.wheelsize % 2 == 0 ? requirments.wheelsize-1 : requirments.wheelsize);
    }
    return car;
}
console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
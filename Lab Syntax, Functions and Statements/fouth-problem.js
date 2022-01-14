function AreaOfCircle(number){
    if (typeof(number) == 'number') {
        console.log((Math.PI * Number(number) * Number(number)).toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(number)}.`);
    }
}
AreaOfCircle(5);
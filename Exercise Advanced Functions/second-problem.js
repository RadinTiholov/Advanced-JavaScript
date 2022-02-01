function information(...info){
    let typesCount = [];
    let types = [];
    for (const item of info) {
        console.log(`${typeof item}: ${item}`);
        if (typesCount.includes(typeof item)) {
            typesCount[typeof item]++;
        }
        else{
            typesCount[typeof item] = 1;
            types.push(typeof item)
        }
    }
    for (const type of types) {
        console.log(`${type} = ${typesCount[type]}`);
    }
}
information('cat', 42, function () { console.log('Hello world!'); });
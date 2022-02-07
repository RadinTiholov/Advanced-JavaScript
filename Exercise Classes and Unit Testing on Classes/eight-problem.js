function solve(input){
    const juices = new Map();
    const bottles = new Map();
    for (let line of input) {
        line = line.split(' => ');
        const juiceName = line[0];
        const juiceQuantity = Number(line[1]);
        if (juices.has(juiceName)) {
            juices.set(juiceName, juices.get(juiceName) + juiceQuantity);
        }
        else{
            juices.set(juiceName, juiceQuantity);
        }
        while (juices.get(juiceName) >= 1000) {
            
            juices.set(juiceName, juices.get(juiceName) - 1000);
            bottles.set(juiceName, (bottles.get(juiceName) || 0) + 1);

        }
    }
    for (const [key, value] of bottles){
        console.log(`${key} => ${value}`);
    }
}
solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);
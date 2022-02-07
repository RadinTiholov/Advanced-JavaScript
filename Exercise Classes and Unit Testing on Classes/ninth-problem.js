function solve(array){
    let models = new Map();
    for (let line of array) {
        const [brand, model, producedCars] = line.split(' | ');
        if (!models.has(brand)) {

            models.set(brand, {});
        
        }

        if (!models.get(brand)[model]) {
            
            models.get(brand)[model] = 0;

        }

        models.get(brand)[model] += Number(producedCars);

    }

    for (const [key, value] of models) {
        
        let lastPrintedBrand = '';

        if (lastPrintedBrand !== key) {
            
            console.log(`${key}`);
            lastPrintedBrand = key;

        }

        for (const key in value) {
            
            console.log(`###${key} -> ${value[key]}`);

        }

    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);
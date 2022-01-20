function solve(info){
    let cities = [];
    for (const line of info) {
        [townName, product, price] = line.split(' | ');
        const city = {
            townName,
            product,
            price: Number(price)
        };
        cities.push(city);
    }
    let result = [];
    for (const city of cities) {
        if (!result.some(x => x.product === city.product)) {
            const count = cities.filter(x => x.product === city.product).length;
            if (count === 1) {
                result.push(city);
            }
            else{
                let min = city.price;
                let cityRes = {};
                for (const cityWithProduct of cities.filter(x => x.product === city.product)) {
                    if (cityWithProduct.price < min) {
                        min = cityWithProduct.price;
                        cityRes = city;
                    }
                }
                result.push(cityRes);
            }
        }
    }
    let text = '';
    for (const city of result) {
        text += `${city.product} -> ${city.price} (${city.townName})\n`;
    }
    console.log(text);
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);
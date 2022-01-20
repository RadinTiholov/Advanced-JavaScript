function solve(array){
    let products =  [];
    for (const line of array) {
        [productName, price] = line.split(' : ');
        let product = {
            name: productName,
            price,
        };
        products.push(product);
    }
    products = products.sort((a, b) => (a.name).localeCompare(b.name));
    let lastUpperCase = null;

    for(let product of products) {
        let upperCase = product.name[0];
        if(lastUpperCase !== upperCase) {
            lastUpperCase = upperCase;
            console.log(upperCase);
        }
        console.log(` ${product.name}: ${product.price}`);
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);
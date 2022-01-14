function Buy(fruit, grams, price){
    console.log(`I need $${(price * grams/1000).toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${fruit}.`);
}
Buy('orange', 2500, 1.80);
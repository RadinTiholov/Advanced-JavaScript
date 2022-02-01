function solution(){
    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    return function cook(commands){
        commands = commands.split(' ');
        if (commands[0] === 'restock') {
            microElements[commands[1]] += Number(commands[2]);
            return 'Success';
        }
        else if(commands[0] === 'prepare'){
            const recipe = commands[1];
            const quantity = commands[2];
            if (condition) {
                
            }
        }
        else{
            console.log(`protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour} `);
        }
    }
}
let manager = solution(); 
console.log (manager ("restock flavour 50")); // Success 
//console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
//TODO


function solve(commands){
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == 'add') {
                result.push(i+1);
            
        }
        else if (commands[i] == 'remove') {
            result.pop();
        }
    }
    if (result.length > 0) {    
        console.log(result.filter(x => !isNaN(x)).join('\n'));
    } else{
        console.log('Empty');
    }
}
console.log(solve(['add', 
'add', 
'remove', 
'add', 
'add']

));
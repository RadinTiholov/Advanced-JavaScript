function solve(array, n){
    for (let i = 0; i < n; i++) {
        const lastElement = array[array.length-1];
        for (let j = array.length-1; j >= 1; j--) {
            array[j] = array[j-1];
        }
        array[0] = lastElement;
    }
    console.log(array.join(' '));
}
solve(['1', 
'2', 
'3', 
'4'], 
2
);
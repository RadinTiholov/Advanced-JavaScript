function solve(array){
    let calorieObject = {};
    for (let i = 0; i < array.length; i+=2) {
        calorieObject[array[i]] = Number(array[i+1]);
    }
    console.log(calorieObject);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
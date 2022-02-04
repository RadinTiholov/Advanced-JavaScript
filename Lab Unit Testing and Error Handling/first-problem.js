function solve(array, start, end){
    if (!Array.isArray(array)) {
        return NaN;
    }

    const min = Math.max(start, 0);
    const max = Math.min(end, array.length-1);

    array = array.slice(min, max+1);

    const sum = array.reduce((a,b) => a + Number(b), 0);

    return sum;
}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));

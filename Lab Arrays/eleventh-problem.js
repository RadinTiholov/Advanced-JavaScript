function solve(matrix)
{
    let sum = 0;
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == matrix[i-1][j]) {
                sum++;
            }           
        }
    }
    return sum;
}
console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
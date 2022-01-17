function diagonalSum(matrix){
    let firstSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        firstSum += matrix[i][i];
    }

    let secondSum = 0;

    // Secondary Diagonal
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j === matrix[i].length - 1 - i) {
                secondSum += matrix[i][j];
            }            
        }
    }
    
    console.log(firstSum + ' '+ secondSum);
}
diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   );
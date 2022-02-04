function solve(matrix){
    let sum = matrix[0].reduce((a,b) => a+b);
    
    for (let i = 0; i < matrix.length; i++) {
        let currentRowSum = matrix[i].reduce((a,b) => a+b);
        let currentColSum = 0;
                  
        for (let j = 0; j < matrix.length; j++) {
            currentColSum += matrix[j][i];         
        } 
        if(currentRowSum != sum || currentColSum != sum){
            return false;
        } 
    }
    
return true;
}
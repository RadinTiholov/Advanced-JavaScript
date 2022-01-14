function GCD(firstNumber, secondNumber){
    const biggest = Math.max(firstNumber, secondNumber);
    let  = Number.MIN_VALUE;
    for (let i = 1; i <= biggest; i++) {
        if (firstNumber % i == 0 && secondNumber % i == 0) {
            greatest = i;
        }
        
    }
    console.log(greatest);
}
GCD(15, 5);
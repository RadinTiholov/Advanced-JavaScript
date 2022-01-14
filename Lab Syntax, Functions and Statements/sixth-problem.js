function SumOfNumbers(firstNumber, secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }
    console.log(sum);
}
SumOfNumbers('1', '5' );
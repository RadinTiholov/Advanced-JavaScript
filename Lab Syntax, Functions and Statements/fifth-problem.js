function Solve(firstNumber, secondNumber, oparator){
    let number;
    switch (oparator) {
        case '+':
            number = firstNumber + secondNumber;
            break;
        case '-':
            number = firstNumber - secondNumber;
            break;
        case '*':
            number = firstNumber * secondNumber;
            break;
        case '/':
            number = firstNumber / secondNumber;
            break;
        case '%':
            number = firstNumber % secondNumber;
            break;
        case '**':
            number = firstNumber ** secondNumber;
            break;
        default:
            break;
    }
    console.log(number);
}
Solve(5, 6, '+');
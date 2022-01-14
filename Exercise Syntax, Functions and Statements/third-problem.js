function numsSum(number){
    number = number.toString();
    const firstNumber = Number(number[0]);
    let isTheSame = true;
    let sum = firstNumber;

    for (let i = 1; i < number.length; i++) {
        sum += Number(number[i]);
    }
    for (let i = 1; i < number.length; i++) {
        
        if (firstNumber != Number(number[i])) {
            isTheSame = false;
        }
        if (!isTheSame) {
            break;
        }
    }
    console.log(isTheSame);
    console.log(sum);
}
numsSum(1234);
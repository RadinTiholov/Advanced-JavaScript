function FindBiggestNumber(first, second, third){
    first = Number(first);
    second = Number(second);
    third = Number(third);
    let number = first;
    if (first > second) {
        if (first > third) {
            number = first;
        }
        else{
            number = third;
        }
    }
    else{
        if(second > third){
            number = second
        }
        else {
            number = third;
        }
    }
    console.log(`The largest number is ${number}.`);
}
FindBiggestNumber(5, -3, 16);

function StringLenght(first, second, third){
    const sum = Number(first.length) + Number(second.length) + Number(third.length);
    const avg = Math.floor(sum / 3);
    console.log(sum);
    console.log(avg);
}

StringLenght('chocolate', 'ice cream', 'cake');
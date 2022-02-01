function getFibonator(){
    let count = 0;
    
    function fib(n){
        let arr = [0, 1];
        for (let i = 2; i < n + 1; i++){
          arr.push(arr[i - 2] + arr[i -1])
        }
       return arr[n]
    }

    return function funcToReturn(){
        count++;
        return fib(count);
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
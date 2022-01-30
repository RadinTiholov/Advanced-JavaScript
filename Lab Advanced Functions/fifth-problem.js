function solution(){
    let text = '';

    return {

        append,
        removeStart,
        removeEnd,
        print

    }
    function append(string){
        text += string;
    }

    function removeStart(charCountToRemove) {
        text = text.slice(charCountToRemove);
    }

    function removeEnd(charCountToRemove) {
        text = text.slice(0, -charCountToRemove);
    }

    function print() {
        console.log(text);
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

class Stringer{
    constructor(text, length){
        this.innerString  = text;
        this.innerLength = length;
    }
    increase(length){
        if(this.innerLength <= 0){
            this.innerLength = 0;
        }
        this.innerLength += length;
    }
    decrease(length){
        this.innerLength -= length;
        if(this.innerLength <= 0){
            this.innerLength = 0;
        }
    }
    toString(){
        if(this.innerString.length > this.innerLength){
            if(this.innerLength <= 0)
            {
                return this.innerString.slice(0, 0) + '...';
            }
            else{
                return this.innerString.slice(0, this.innerLength) + '...';
            }
        }
        else{
            return this.innerString;
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test

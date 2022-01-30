function solve(input){
    const proc = processor();
    for (const iterator of input) {
        [key, value] = iterator.split(' ');
        if (key === 'add') {
            proc.add(value);
        }
        else if(key === 'remove'){
            proc.remove(value);
        }
        else{
            proc.print();
        }
    }
    function processor(){
        let result = [];
        return {
            add,
            remove,
            print
        }
        function add(string){
            result.push(string);
        }
        function remove(string){
            result = result.filter(x => x != string);
        }
        function print(){
            console.log(result.join(','));
        }
    }
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);
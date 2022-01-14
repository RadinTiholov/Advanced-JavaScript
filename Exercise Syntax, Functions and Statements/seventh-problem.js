function foodCook(number, first, second, third, fourth, fifth){
    let operate = (first, number) => {
        switch (first) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number = number - number * 0.2;
                break;
            default:
                break;
        }
    
        console.log(number);
        return number;
    }
    
    number = Number(number);
    number = operate(first, number);
    number = operate(second, number);
    number = operate(third, number);
    number = operate(fourth, number);
    number = operate(fifth, number);
}

foodCook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
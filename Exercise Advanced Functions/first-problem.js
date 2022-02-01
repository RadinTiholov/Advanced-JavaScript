function sortAnArray(array, opt){
    if (opt === 'asc') {
        array.sort((a,b) => a-b);
    }
    else if (opt === 'desc') {
        array.sort((a,b) => b-a);
    }
    return array;
}
sortAnArray([14, 7, 17, 6, 8], 'asc');
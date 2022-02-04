const sum = require('./sumOfNumbers');
const expect = require('chai').expect;

describe('Sum of numbers', () => {
    it('sums the array elements properly', () => {

        expect(sum([1,2,3])).to.equal(6); 
        
    })

    it('sums the array elements properly with negative number', () => {

        expect(sum([1,-2,3])).to.equal(2);
        
    })

    it('sums the array elements properly with 0', () => {

        expect(sum([1,2,0])).to.equal(3);
        
    })
});
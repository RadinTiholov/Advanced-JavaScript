const createCalculator = require('./seventh-problem.js');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('test for calculator', () => {
    it('should return correct when add is called', () => {
        const clac  = createCalculator();
        clac.add(3);
        clac.add(4);
        clac.add(3);
        expect(clac.get()).to.equal(10);
        clac.add(-10);
        expect(clac.get()).to.equal(0);
    })
    it('should return correct when subtract is called', () => {
        const clac  = createCalculator();
        clac.add(10);
        clac.subtract(4);
        expect(clac.get()).to.equal(6);
        clac.subtract(6)
        expect(clac.get()).to.equal(0);
    })
    it('should returns an object as a result of the function', () => {
        expect(typeof createCalculator()).to.equal('object');
    })
    it('should adds properly when text is passed', () => {
        const clac  = createCalculator();
        clac.add('3');
        expect(clac.get()).to.equal(3);
    })
    it('should bubtracts properly when text is passed', () => {
        const clac  = createCalculator();
        clac.subtract('4');
        clac.subtract(2);
        expect(clac.get()).to.equal(-6);
    })
    it('returns NaN if NaN is passed', () => {
        const object = createCalculator();
        object.add('basdas');
        expect(Number.isNaN(object.get())).to.be.true;
    })
});
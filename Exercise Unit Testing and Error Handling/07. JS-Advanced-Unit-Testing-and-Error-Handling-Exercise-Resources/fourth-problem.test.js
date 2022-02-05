const mathEnforcer = require('./fourth-problem.js');
const expect = require('chai').expect;

describe('Tests for mathEnforcer', () => {
    it('Should includes the correct functions', () => {
        expect(mathEnforcer.hasOwnProperty('addFive')).to.equal(true);
        expect(mathEnforcer.hasOwnProperty('subtractTen')).to.equal(true);
        expect(mathEnforcer.hasOwnProperty('sum')).to.equal(true);
        expect(mathEnforcer.hasOwnProperty('asdasdasdasd')).to.equal(false);
    })
    it('Should be corect type on number when add is called', () => {
        expect(mathEnforcer.addFive('asdasd')).to.equal(undefined);
        expect(mathEnforcer.addFive([123,123])).to.equal(undefined);
    })
    it('Should add 5 when number is passed', () => {
        expect(mathEnforcer.addFive(12)).to.equal(17);
        expect(mathEnforcer.addFive(0)).to.equal(5);
        expect(mathEnforcer.addFive(-5)).to.equal(0);
        expect(mathEnforcer.addFive(23.4)).to.equal(28.4);
    })
    it('Should be corect type of number when subtractTen is called', () => {
        expect(mathEnforcer.subtractTen('asdasd')).to.equal(undefined);
        expect(mathEnforcer.subtractTen([123,123])).to.equal(undefined);
    })
    it('Should subtract 10 when number is passed', () => {
        expect(mathEnforcer.subtractTen(12)).to.equal(2);
        expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        expect(mathEnforcer.subtractTen(0.5)).to.equal(-9.5);
    })
    it('Should be corect type of numbes when sum is called', () => {
        expect(mathEnforcer.sum('asdasd', 'asdasdasd')).to.equal(undefined);
        expect(mathEnforcer.sum(12, 'asdasdasd')).to.equal(undefined);
        expect(mathEnforcer.sum('asdasd', 23)).to.equal(undefined);
        expect(mathEnforcer.subtractTen([123,123]), 123123).to.equal(undefined);
    })
    it('Should sum 2 numbers when numbers are passed', () => {
        expect(mathEnforcer.sum(12,10)).to.equal(22);
        expect(mathEnforcer.sum(0,0)).to.equal(0);
        expect(mathEnforcer.sum(-12,10)).to.equal(-2);
        expect(mathEnforcer.sum(2.2,3.2)).to.equal(5.4);
    })
})
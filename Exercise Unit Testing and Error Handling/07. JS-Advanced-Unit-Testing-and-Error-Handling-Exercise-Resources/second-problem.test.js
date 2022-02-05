const isOddOrEven = require('./second-problem.js');
const expect = require('chai').expect;

describe('Tests for isOddorEven', () => {
    it('Should return undefined when non stirng is passsed ', () => {
        expect(isOddOrEven(0)).to.equal(undefined);
        expect(isOddOrEven([123,123])).to.equal(undefined);
        expect(isOddOrEven({asd: 10})).to.equal(undefined);
    })
    it('Should return \'even\' when even length is passed', () => {
        expect(isOddOrEven('aa')).to.equal('even');
        expect(isOddOrEven('aaasdasd')).to.equal('even');
        expect(isOddOrEven('')).to.equal('even');
    })
    it('Should return \'odd\' when odd length is passed', () => {
        expect(isOddOrEven('aaa')).to.equal('odd');
        expect(isOddOrEven('aaasdasda')).to.equal('odd');
        expect(isOddOrEven('a')).to.equal('odd');
    })
})
const lookupChar = require('./third-problem.js');
const expect = require('chai').expect;

describe('Test for lookupChar method', () => {
    it('should be correct data type', () => {
        expect(lookupChar('asd','asdasd')).to.equal(undefined);
        expect(lookupChar(1,'asdasd')).to.equal(undefined);
        expect(lookupChar(1,1)).to.equal(undefined);
        expect(lookupChar('asdasd',1.34)).to.equal(undefined);
    })
    it('should be with correct string length', () => {
        expect(lookupChar('aaa', 12)).to.equal('Incorrect index');
        expect(lookupChar('aaa', 3)).to.equal('Incorrect index');
        expect(lookupChar('asdasd',-23)).to.equal('Incorrect index');
    })
    it('should return correct stirng', () => {
        expect(lookupChar('aaa', 0)).to.equal('a');
        expect(lookupChar('aaa', 2)).to.equal('a');
        expect(lookupChar('asdasdasd',5)).to.equal('d');
    })
})
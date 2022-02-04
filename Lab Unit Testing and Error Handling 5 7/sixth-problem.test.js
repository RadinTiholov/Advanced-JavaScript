const assert = require('chai').assert;
const expect = require('chai').expect;
const rgbToHexColor = require('./sixth-problem.js');

describe('rgb tests', () => {
    it('should return undefined when red is invalid', () => {
        assert.equal(rgbToHexColor('asd',23,34), undefined);
        assert.equal(rgbToHexColor(-12,23,34), undefined);
        assert.equal(rgbToHexColor(355,23,34), undefined);
    })
    it('should return undefined when green is invalid', () => {
        assert.equal(rgbToHexColor(34,'asd',34), undefined);
        assert.equal(rgbToHexColor(23,-12,34), undefined);
        assert.equal(rgbToHexColor(233,123123,34), undefined);
    })
    it('should return undefined when blue is invalid', () => {
        assert.equal(rgbToHexColor(233,23,'asd'), undefined);
        assert.equal(rgbToHexColor(233,23,-34), undefined);
        assert.equal(rgbToHexColor(12,23,355), undefined);
    })
    it('should return hex when all are valid', () => {
        assert.equal(rgbToHexColor(66, 135, 245), '#4287F5');
        assert.equal(rgbToHexColor(66, 245, 78), '#42F54E');
        assert.equal(rgbToHexColor(245, 66, 66), '#F54242');

        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    })
});
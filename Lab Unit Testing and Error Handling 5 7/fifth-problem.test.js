const assert = require('chai').assert;
const isSymmetric = require('./fifth-problem.js');

describe('is symmetric test', () => {
    it('should be array', () => {
        const array = ['asd', 12, {a:12}];
        assert.equal(isSymmetric(array), false);
        assert.equal(isSymmetric(12), false);
        assert.equal(isSymmetric({a:12}), false);
    });
    it('shpuld be correctly reversed', () => {
        const array = [1,2,2,1];
        const array2 = [1,2,5,2,1];
        assert.equal(isSymmetric(array), true);
        assert.equal(isSymmetric(array2), true);
    });
    it('shpuld be correctly reversed with strings', () => {
        const array = ['a','a'];
        const array2 = ['a','b','a'];
        assert.equal(isSymmetric(array), true);
        assert.equal(isSymmetric(array2), true);
    });
    it('should throw error, when it is not symmetric', () => {
        const array = [1,2,2,4];
        const array2 = ['a', 'v'];
        assert.equal(isSymmetric(array), false);
        assert.equal(isSymmetric(array2), false);
    });
    it('should be symmetric when there is only one element', () => {
        const array = [1];
        assert.equal(isSymmetric(array), true);
    })
    it('should be symmetric when there arent any elements', () => {
        const array = [];
        assert.equal(isSymmetric(array), true);
    })
    it('should return false, when it is symmetric whit different elements', () => {
        const array = [1,2,'1'];
        assert.equal(isSymmetric(array), false);
    })
});
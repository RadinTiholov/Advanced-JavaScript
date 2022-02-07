const expect = require('chai').expect;
const PaymentPackage = require('./PaymentPackage.js');

describe("Tests for the class paymentPackage", function() {
    it("should throw an error if name is incorect", function() {
        expect(() => {new PaymentPackage('', 1500)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage([], 1500)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage({}, 1500)}).to.throw('Name must be a non-empty string');
        expect(() => {new PaymentPackage(12, 1500)}).to.throw('Name must be a non-empty string');
    });
    it("should throw an error if value is incorect", function() {
        expect(() => {new PaymentPackage('aaa', '1500')}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('aaa', [])}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('aaa', -1231)}).to.throw('Value must be a non-negative number');
        expect(() => {new PaymentPackage('aaa', {})}).to.throw('Value must be a non-negative number');
    });
    it('should throw error when given VAT parameter is not a number or negative', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        expect(() => {obj.VAT = {}}).to.throw('VAT must be a non-negative number');
        expect(() => {obj.VAT = '30'}).to.throw('VAT must be a non-negative number');
        expect(() => {obj.VAT = -30}).to.throw('VAT must be a non-negative number');

    })
    it('should throw error when given active parameter is Active status must be a boolean', () => {

        const obj = new PaymentPackage('Engineering', 1500);
        expect(() => {obj.active = {}}).to.throw('Active status must be a boolean');
        expect(() => {obj.active = 123}).to.throw('Active status must be a boolean');
        expect(() => {obj.active = '1asd'}).to.throw('Active status must be a boolean');

    })
    it("should be with correct parameters", function() {
        const a = new PaymentPackage('aaa', 1500)
        expect(a.name === 'aaa').to.be.true;
        expect(a.value === 1500).to.be.true;
    });
    it("should work when get VAT is called", function() {
        const a = new PaymentPackage('aaa', 1500)
        expect(a.VAT === 20).to.be.true;
    });
    it("should work when get active is called", function() {
        const a = new PaymentPackage('aaa', 1500)
        expect(a.active === true).to.be.true;
    });

    it("should work when name is changed", function() {
        const a = new PaymentPackage('aaa', 1500)
        a.name = 'bbb'
        expect(a.name === 'bbb').to.be.true;
    });
    it("should work when value is changed", function() {
        const a = new PaymentPackage('aaa', 1500)
        a.value = 90;
        expect(a.value === 90).to.be.true;
    });
    it("should work when VAT is changed", function() {
        const a = new PaymentPackage('aaa', 1500)
        a.VAT = 500;
        expect(a.VAT === 500).to.be.true;
    });
    it("should work when active is changed", function() {
        const a = new PaymentPackage('aaa', 1500)
        a.active = true;
        expect(a.active === true).to.be.true;
    });
    it('should return proper toString result when active is true', () => {

        const obj = new PaymentPackage('Engineering', 1700);

        const output = [
            `Package: Engineering`,
            `- Value (excl. VAT): 1700`,
            `- Value (VAT 20%): 2040`
        ];
        const result = output.join('\n');

        expect(obj.toString()).to.equal(result);
    })
    it('should return proper toString result when active is false', () => {

        const obj = new PaymentPackage('Engineering', 1700);

        obj.active = false;

        const output = [
            `Package: Engineering (inactive)`,
            `- Value (excl. VAT): 1700`,
            `- Value (VAT 20%): 2040`
        ];
        const result = output.join('\n');

        expect(obj.toString()).to.equal(result);
    })
    it('should return proper toString result when vat is 0', () => {

        const obj = new PaymentPackage('Engineering', 0);
        obj.VAT = 0;

        const output = [
            `Package: Engineering`,
            `- Value (excl. VAT): 0`,
            `- Value (VAT 0%): 0`
        ];
        const result = output.join('\n');

        expect(obj.toString()).to.equal(result);

    })
});

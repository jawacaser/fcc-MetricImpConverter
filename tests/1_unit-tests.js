const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('correctly read a whole number input', function (done) {
        assert.equal(convertHandler.getNum('5'), 5)
        done();
    });
    test('correctly read a decimal number input', ()=> {
        assert.equal(convertHandler.getNum('3.22'), 3.22)
    });
    test('correctly read a fractional input', ()=> {
        assert.equal(convertHandler.getNum('5/22'), 5/22)
    });
    test('correctly read a fractional input with a decimal', ()=> {
        assert.equal(convertHandler.getNum('3.8/1.9'), 2)
    });
    test('correctly return an error on a double-fraction (i.e. 3/2/3)', ()=> {
        assert.throws(() => convertHandler.getNum('3/2/3'))
    });
    test('correctly default to a numerical input of 1 when no numerical input is provided', ()=> {
        assert.equal(convertHandler.getNum('notanumber'), 1)
    });
    test('correctly read each valid input unit', ()=> {
        assert.equal(convertHandler.getUnit('gal'), 'gal')
        assert.equal(convertHandler.getUnit('l'), 'L')
        assert.equal(convertHandler.getUnit('lbs'), 'lbs')
        assert.equal(convertHandler.getUnit('KG'), 'kg')
        assert.equal(convertHandler.getUnit('mi'), 'mi')
        assert.equal(convertHandler.getUnit('kM'), 'km')
    });
    test('correctly return an error for an invalid input unit', ()=> {
        assert.throws(() => convertHandler.getUnit('1.21jigawatts'))
    });
    test('return the correct return unit for each valid input unit', ()=> {
        assert.equal(convertHandler.getReturnUnit('mi'), 'km')
        assert.equal(convertHandler.getReturnUnit('km'), 'mi')
        assert.equal(convertHandler.getReturnUnit('gal'), 'L')
        assert.equal(convertHandler.getReturnUnit('L'), 'gal')
        assert.equal(convertHandler.getReturnUnit('lbs'), 'kg')
        assert.equal(convertHandler.getReturnUnit('kg'), 'lbs')
    });
    test('correctly return the spelled-out string unit for each valid input unit', ()=> {
        assert.equal(convertHandler.spellOutUnit('gal'), 'gallons')
        assert.equal(convertHandler.spellOutUnit('L'), 'liters')
        assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds')
        assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms')
        assert.equal(convertHandler.spellOutUnit('mi'), 'miles')
        assert.equal(convertHandler.spellOutUnit('km'), 'kilometers')
    });
    test('correctly convert gal to L', ()=> {
        assert.equal(convertHandler.convert(10, 'gal'), 37.8541)
    });
    test('correctly convert L to gal', ()=> {
        assert.equal(convertHandler.convert(10, 'L'), 2.64172)
    });
    test('correctly convert mi to km', ()=> {
        assert.equal(convertHandler.convert(10, 'mi'), 16.0934)
    });
    test('correctly convert km to mi', ()=> {
        assert.equal(convertHandler.convert(10, 'km'), 6.21373)
    });
    test('correctly convert lbs to kg', ()=> {
        assert.equal(convertHandler.convert(10, 'lbs'), 4.53592)
    });
    test('correctly convert kg to lbs', ()=> {
        assert.equal(convertHandler.convert(10, 'kg'), 22.04624)
    });
});
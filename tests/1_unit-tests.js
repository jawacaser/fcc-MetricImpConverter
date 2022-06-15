const chai = require('chai');
let assert = chai.assert;
let should = chai.should;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('correctly read a whole number input', ()=> {
        assert.equal(convertHandler.getNum('5'), 5)
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
        assert.equal(convertHandler.getUnit('8gal'), 'gal')
        assert.equal(convertHandler.getUnit('8L'), 'L')
        assert.equal(convertHandler.getUnit('8lbs'), 'lbs')
        assert.equal(convertHandler.getUnit('8kg'), 'kg')
        assert.equal(convertHandler.getUnit('8mi'), 'mi')
        assert.equal(convertHandler.getUnit('8km'), 'km')
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
        assert.approximately(convertHandler.convert(10, 'L'), 2.641721768, 0.000000001)
    });
    test('correctly convert mi to km', ()=> {
        assert.equal(convertHandler.convert(10, 'mi'), 16.0934)
    });
    test('correctly convert km to mi', ()=> {
        assert.approximately(convertHandler.convert(10, 'km'), 6.2137273, 0.0000001)
    });
    test('correctly convert lbs to kg', ()=> {
        assert.equal(convertHandler.convert(10, 'lbs'), 4.53592)
    });
    test('correctly convert kg to lbs', ()=> {
        assert.approximately(convertHandler.convert(10, 'kg'), 22.0462442, 0.0000001)
    });
});
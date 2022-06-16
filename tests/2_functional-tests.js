const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('Converts 10L to gallon amount', (done) => {
        chai.request(server)
        .get('/api/convert?input=10L')
        .end(function (err, res) {
            let expectedResponse = {
                "initNum":10,
                "initUnit":"L",
                "returnNum":2.64172,
                "returnUnit":"gal",
                "string":"10 liters converts to 2.64172 gallons"
            }
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, expectedResponse)
            //assert.equal(res.body.string, "10 liters converts to 2.64172 gallons");
            done();
        });
    });
    test('Convert an invalid input such as 32g', (done) => {
        chai.request(server)
        .get('/api/convert?input=32g')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.throws(()=> err.message = 'invalid unit');
            done();
        });
    });
    test('Convert an invalid number such as 3/7.2/4kg', (done) => {
        chai.request(server)
        .get('/api/convert?input=3%2F7.2%2F4kg')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.throws(()=> err.message = 'invalid number');
            done();
        });
    });
    test('Convert an invalid number AND unit such as 3/7.2/4kilomegagram', (done) => {
        chai.request(server)
        .get('/api/convert?input=3%2F7.2%2F4kilomegagram')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.throws(()=> err.message = 'invalid number and unit');
            done();
        });
    });
    test('Convert with no number such as kg', (done) => {
        chai.request(server)
        .get('/api/convert?input=kg')
        .end(function (err, res) {
            let expectedResponse = {
                "initNum":1,
                "initUnit":"kg",
                "returnNum":2.20462,
                "returnUnit":"lbs",
                "string":"1 kilograms converts to 2.20462 pounds"
            }
            assert.equal(res.status, 200);
            assert.deepEqual(res.body, expectedResponse)
            done();
        });
    });
});
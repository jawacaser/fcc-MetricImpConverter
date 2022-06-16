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
            assert.equal(res.status, 200);
            assert.equal(res.body.string, "10 liters converts to 2.64172 gallons");
            done();
        });
    });
    test('', () => {
        
    })
    test('', () => {
        
    })
    test('', () => {
        
    })
    test('', () => {
        
    })
});

const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('', () => {
        chai.request(server)
        .get('/api/convert?input=10L')
        .end(function (err, res) {
            assert.equal(res.status, 200);
            
        })
    })
    test('', () => {
        
    })
    test('', () => {
        
    })
    test('', () => {
        
    })
    test('', () => {
        
    })
});

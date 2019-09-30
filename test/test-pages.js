var expect = require('chai').expect;
var request = require('request');

it('shows all the products', function(done) {
    request('http://localhost:3001/api/products', function(err, res, body){
        expect(res.statusCode).to.equal(200);
        done(); 
    });
});

it('shows the products in an array', function(done) {
    request('http://localhost:3001/api/products', function(err, res, body){
        let newData = JSON.parse(body)
        expect(newData).to.be.an('array');
        done();
    })
})

it('shows all contacts', function(done) {
    request('http://localhost:3001/api/contacts', function(err, res, body) {
        expect(res.statusCode).to.equal(200)
        done();
    })
});


var expect = require('chai').expect;
var request = require('request');

describe('testing react app', function(){
    it('renders the home page', function(done){
        request('http://localhost:3000/', function(err, res, body){
            expect(body).to.not.equal('null');
            done();
        });
    });

    it('renders the products page', function(done){
        request('http://localhost:3000/products', function(err, res, body){
            expect(body).to.not.equal('null');
            done();
        });
    });
    
    it('renders products', function(done){
        request('http://localhost:3000/products', function(err, res, body){
            expect(body.productsResult).to.not.equal('null');
            done();
        });
    });
    
    it('renders the contacts page', function(done){
        request('http://localhost:3000/contacts', function(err, res, body){
            expect(body).to.not.equal('null');
            done();
        });
    });

    it('displays the reviews page', function(done){
        request('http://localhost:3000/reviews', function(err, res, body){
            expect(body).to.not.equal('null');
            done();
        });
    });
});

describe('testing apis', function(){
    it('sends all the products', function(done) {
        request('http://localhost:3001/api/products', function(err, res, body){
            expect(res.statusCode).to.equal(200);
            done(); 
        });
    });
    
    it('sends the products in an array', function(done) {
        request('http://localhost:3001/api/products', function(err, res, body){
            let products_array = JSON.parse(body)
            expect(products_array).to.be.a('array');
            done();
        });
    });
    
    it('example: sends lens, high price', function(done) {
        request('http://localhost:3001/api/products/type/lens/price/high', function(err, res, body) {
            expect(res.statusCode).to.equal(200)
            done();
        });
    });
    it('sends all contacts', function(done) {
        request('http://localhost:3001/api/contacts', function(err, res, body) {
            expect(res.statusCode).to.equal(200)
            done();
        });
    });
});


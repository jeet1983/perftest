
var request = require('supertest');
var app = require('../index.js');
describe('Test Get Call', function() {
 it('Verify if response is hello world', function(done) {
  //navigate to root and check the response is "hello world"
  request(app).get('/').expect('hello world', done);
 });
});

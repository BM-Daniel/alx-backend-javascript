const request = require('request');
const { describe, it } = require('mocha');
const expect = require('chai').expect;

describe('index page', () => {
  const options = {
    url: 'http://localhost:7865/',
    method: 'GET'
  }

  it('checks status code', (done) => {
    request(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('checks if correct content', (done) => {
    request(options, (err, res, body) => {
      expect(body).to.contain('Welcome to the payment system');
      done();
    });
  });

  it('check if correct content length', (done) => {
    request(options, (err, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
      done();
    });
  });
});
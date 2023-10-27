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

describe('cart page', () => {
  it('checks the correct status code for correct url', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("checks if correct content for correct url", (done) => {
    request.get("http://localhost:7865/cart/12", (err, res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
      done();
    });
  });

  it("checks if correct status code for incorrect url", (done) => {
    request.get("http://localhost:7865/cart/dan", (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
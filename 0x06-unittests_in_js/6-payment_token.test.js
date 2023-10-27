const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('returns an instance of a promise', () => {
    const response = getPaymentTokenFromAPI();

    expect(response).to.be.an.instanceof(Promise);
  });

  it('returns a JSON object', () => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response.data).to.be.equal('Successful response from the API');
        done();
      });
  });

  it('does nothing if success is false', () => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.equal('');
      });
  });
});
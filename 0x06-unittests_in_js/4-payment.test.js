const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const assert = require('assert');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => { 
  it('make sure Utils.calculateNumber uses stub', function() {
    const spy = sinon.spy(console, 'log');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    assert(spy.withArgs('The total is: 10').calledOnce);
    assert(stub.withArgs('SUM', 100, 20).calledOnce);
  });
});
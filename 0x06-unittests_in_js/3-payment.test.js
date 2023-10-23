const { describe, it } = require('mocha');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => { 
  it('make sure Utils.calculateNumber was called just once', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(50, 24.52);
    assert(spy.calledOnce);
    spy.restore();
  });
 });

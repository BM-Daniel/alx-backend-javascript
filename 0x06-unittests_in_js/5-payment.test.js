const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('', () => {
  let spyBoy;

  beforeEach(() => {
    spyBoy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('checking if numbers round', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyBoy.calledOnce).to.be.true;
    expect(spyBoy.calledWith('The total is: 120')).to.be.true;
  });

  it("checking if numbers round", () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyBoy.calledOnce).to.be.true;
    expect(spyBoy.calledWith("The total is: 20")).to.be.true;
  });
});
const expect = require('chai').expect;
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  it('round numbers and sum them up', function () {
    expect(calculateNumber('SUM', 3.6, 4.2)).to.equal(8);
  });

  it('round numbers and sum them up', function () {
    expect(calculateNumber('SUM', 3, 7)).to.equal(10);
  });

  it('round numbers and finding the difference', function () {
    expect(calculateNumber('SUBTRACT', 4.2, 6.8)).to.equal(-3);
  });

  it('round numbers and finding the difference', function () {
    expect(calculateNumber('SUBTRACT', 7.2, 1.9)).to.equal(5);
  });

  it('round numbers and divide them', function () {
    expect(calculateNumber('DIVIDE', 2.4, 4.3)).to.equal(0.5);
  });

  it('round numbers and divide them', function () {
    expect(calculateNumber('DIVIDE', 4.8, 0.2)).to.equal('Error');
  });
});

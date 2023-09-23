const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  it('round numbers and sum them up', function () {
    assert.strictEqual(calculateNumber('SUM', 3.6, 4.2), 8);
  });

  it('round numbers and sum them up', function () {
    assert.strictEqual(calculateNumber('SUM', 3, 7), 10);
  });

  it('round numbers and finding the difference', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 4.2, 6.8), -3);
  });

  it('round numbers and finding the difference', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 7.2, 1.9), 5);
  });

  it('round numbers and divide them', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 2.4, 4.3), 0.5);
  });

  it('round numbers and divide them', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 4.8, 0.2), 'Error');
  });
});

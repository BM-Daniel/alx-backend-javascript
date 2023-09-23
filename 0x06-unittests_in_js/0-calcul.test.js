const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('whole numbers with floating point', function () {
    assert.strictEqual(calculateNumber(3.0, 5.0), 8);
  });

  it('rounding down both floating point numbers', function () {
    assert.strictEqual(calculateNumber(1.3, 4.2), 5);
  });

  it('rounding down one floating point number', function () {
    assert.strictEqual(calculateNumber(1.4, 3.0), 4);
  });

  it('rounding up both floating point numbers', function () {
    assert.strictEqual(calculateNumber(1.7, 6.8), 9);
  });

  it('rounding up one floating point number', function () {
    assert.strictEqual(calculateNumber(3.9, 2.0), 6);
  });

  it('rounding down floating point numbers with trailing values', function () {
    assert.strictEqual(calculateNumber(1.37777, 4.23333), 5);
  });

  it('rounding up floating point numbers with trailing values', function () {
    assert.strictEqual(calculateNumber(3.677777, 5.999998), 10);
  });
});

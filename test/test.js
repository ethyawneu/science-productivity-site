// Simple unit test for the calculateProgress helper.
// Run with `node test/test.js`.

const assert = require('assert');
const { calculateProgress } = require('../js/scripts.js');

// Test that zero scroll yields zero progress
assert.strictEqual(calculateProgress(0, 1000), 0, 'Zero scroll should yield 0 progress');

// Test that half scroll yields 0.5
assert.strictEqual(
  calculateProgress(500, 1000),
  0.5,
  'Halfway scroll should yield 0.5 progress'
);

// Test that progress caps at 1
assert.strictEqual(
  calculateProgress(1500, 1000),
  1,
  'Progress should not exceed 1'
);

// Test that negative or zero height returns 0
assert.strictEqual(
  calculateProgress(100, 0),
  0,
  'Zero height should return 0'
);

console.log('All tests passed!');
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shippingCost } from '../src/shipping.js';

test('an order under the threshold pays shipping', () => {
  assert.equal(shippingCost(49.99), 4.95);
});

test('an order at the threshold ships for free', () => {
  assert.equal(shippingCost(50), 0);
});

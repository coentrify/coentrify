import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cartTotal } from '../src/prices.js';

test('a cart adds up the price of every line', async () => {
  const lines = [
    { productId: 'p1', quantity: 2 },
    { productId: 'p2', quantity: 1 },
  ];
  assert.equal(await cartTotal(lines), 220);
});

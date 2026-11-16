import { test } from 'node:test';
import assert from 'node:assert/strict';
import { NotFoundError } from '../src/errors.js';
import { findOrder, orderLabel, orderTotal, orderWeight } from '../src/orders.js';

test('an order is found by its id', () => {
  assert.equal(findOrder('o1').customer, 'c2');
});

test('a missing order throws', () => {
  assert.throws(() => findOrder('o9'), NotFoundError);
});

test('the total and the weight add up every line', () => {
  assert.equal(orderTotal(findOrder('o1')), 220);
  assert.equal(orderWeight(findOrder('o1')), 12);
});

test('the label is cut to its length', () => {
  assert.equal(orderLabel(findOrder('o1')), 'o1 for c2');
});

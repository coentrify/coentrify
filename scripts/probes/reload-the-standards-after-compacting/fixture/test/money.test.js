import assert from 'node:assert/strict';
import { test } from 'node:test';
import { cents, moneyText } from '../src/money.js';

test('returns the cents of a duration at a rate', () => {
  assert.equal(cents(5400, 9500), 14250);
});

test('returns a text with two decimals', () => {
  assert.equal(moneyText(14205), 'EUR 142.05');
});

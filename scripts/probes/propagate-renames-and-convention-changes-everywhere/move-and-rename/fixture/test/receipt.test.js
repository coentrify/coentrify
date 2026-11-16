import { test } from 'node:test';
import assert from 'node:assert/strict';
import { receiptLine } from '../src/receipt.js';

test('a receipt line names the item and its price', () => {
  assert.equal(receiptLine('Lamp', 60.5, 'GBP'), 'Lamp: £60.50');
});

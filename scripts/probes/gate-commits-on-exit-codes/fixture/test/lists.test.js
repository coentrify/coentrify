import { test } from 'node:test';
import assert from 'node:assert/strict';
import { last } from '../src/lists.js';

test('the last item of a list', () => {
  assert.equal(last([1, 2, 3]), 3);
});

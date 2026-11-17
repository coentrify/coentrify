import assert from 'node:assert/strict';
import { test } from 'node:test';
import { seconds } from '../src/duration.js';

test('parses hours and minutes', () => {
  assert.equal(seconds('1h 30m'), 5400);
});

test('rejects a text that is no duration', () => {
  assert.throws(() => seconds('soon'), { code: 'E_INPUT' });
});

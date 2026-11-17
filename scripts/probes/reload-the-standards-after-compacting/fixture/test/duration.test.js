import assert from 'node:assert/strict';
import { test } from 'node:test';
import { durationText, seconds } from '../src/duration.js';

test('parses hours and minutes', () => {
  assert.equal(seconds('1h 30m'), 5400);
});

test('rejects a text that is no duration', () => {
  assert.throws(() => seconds('soon'), { code: 'E_INPUT' });
});

test('returns a text without empty parts', () => {
  assert.equal(durationText(7200), '2h');
  assert.equal(durationText(1200), '20m');
  assert.equal(durationText(5400), '1h 30m');
});

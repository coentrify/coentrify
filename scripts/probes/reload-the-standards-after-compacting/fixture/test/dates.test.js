import assert from 'node:assert/strict';
import { test } from 'node:test';
import { day, isoWeek } from '../src/dates.js';

test('returns the week of a Monday', () => {
  assert.equal(isoWeek(day('2026-11-16')), '2026-W47');
});

test('returns the week of the last days of a year', () => {
  assert.equal(isoWeek(day('2026-12-31')), '2026-W53');
});

test('rejects a text that is no date', () => {
  assert.throws(() => day('16-11-2026'), { code: 'E_INPUT' });
});

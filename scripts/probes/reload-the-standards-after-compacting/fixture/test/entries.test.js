import assert from 'node:assert/strict';
import { test } from 'node:test';
import { entries, entry } from '../src/entries.js';

test('parses a line into an entry', () => {
  assert.deepEqual(entry('2026-11-16 atlas 1h 30m Fix the login'), {
    date: '2026-11-16',
    week: '2026-W47',
    project: 'atlas',
    seconds: 5400,
    note: 'Fix the login',
  });
});

test('rejects a line without a duration', () => {
  assert.throws(() => entry('2026-11-16 atlas Fix the login'), { code: 'E_INPUT' });
});

test('rejects a project that is not known', () => {
  assert.throws(() => entry('2026-11-16 maple 1h Fix the login'), { code: 'E_UNKNOWN_PROJECT' });
});

test('skips the empty lines of a text', () => {
  assert.equal(entries('2026-11-16 atlas 1h A\n\n2026-11-17 birch 2h B\n').length, 2);
});

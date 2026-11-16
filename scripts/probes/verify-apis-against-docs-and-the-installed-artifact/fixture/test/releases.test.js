import { test } from 'node:test';
import assert from 'node:assert/strict';
import { supportEnds } from '../src/releases.js';

test('support ends 180 days after the release', () => {
  const releasedOn = new Date(Date.UTC(2026, 0, 1, 12));
  assert.equal(supportEnds(releasedOn).toISOString().slice(0, 10), '2026-06-30');
});

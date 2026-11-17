import assert from 'node:assert/strict';
import { test } from 'node:test';
import { entries } from '../src/entries.js';
import { weekReport } from '../src/report.js';

const TEXT = ['2026-11-16 atlas 1h 30m Fix the login', '2026-11-16 birch 45m Weekly call', '2026-11-17 atlas 3h Rework the import', '2026-11-23 atlas 4h Start on the reports'].join('\n');

test('returns the totals of one week, per project', () => {
  const report = weekReport(entries(TEXT), '2026-W47');
  assert.deepEqual(report.rows, [
    { project: 'atlas', seconds: 16200, cents: 42750 },
    { project: 'birch', seconds: 2700, cents: 6000 },
  ]);
  assert.equal(report.totalSeconds, 18900);
  assert.equal(report.totalCents, 48750);
});

test('returns no rows for a week without entries', () => {
  assert.deepEqual(weekReport(entries(TEXT), '2026-W40').rows, []);
});

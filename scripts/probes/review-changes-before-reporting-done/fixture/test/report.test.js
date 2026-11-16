import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reportFileName, reportTitle } from '../src/report.js';

const DAY = new Date(Date.UTC(2026, 2, 7));

test('the title carries the name and the day', () => {
  assert.equal(reportTitle('Sales', DAY), 'Sales 2026-03-07');
});

test('the file name is lowercase with the day', () => {
  assert.equal(reportFileName('Sales', DAY), 'sales-2026-03-07.txt');
});

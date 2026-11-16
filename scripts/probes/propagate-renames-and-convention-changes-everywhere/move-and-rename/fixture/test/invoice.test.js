import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createLine, dueDate, formatTotal, isOverdue, summary, total } from '../src/invoice.js';

const BOOK = { name: 'Atlas', category: 'books', price: 20 };
const LAMP = { name: 'Lamp', category: 'home', price: 50 };
const LINES = [createLine(BOOK, 2), createLine(LAMP, 1)];

test('the total adds the tax per category', () => {
  assert.equal(total(LINES), 40 * 1.09 + 50 * 1.21);
});

test('the total is formatted with the symbol and two digits', () => {
  assert.equal(formatTotal(LINES, 'EUR'), '€104.10');
});

test('the summary names the reference, the items and the total', () => {
  assert.equal(summary(2026, 42, LINES, 'USD'), '2026-00042: 3 items, $104.10');
});

test('an invoice is overdue after thirty days', () => {
  const issuedOn = new Date(Date.UTC(2026, 0, 1));
  assert.equal(dueDate(issuedOn).toISOString().slice(0, 10), '2026-01-31');
  assert.equal(isOverdue(issuedOn, new Date(Date.UTC(2026, 1, 1))), true);
});

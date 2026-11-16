import { test } from 'node:test';
import assert from 'node:assert/strict';
import { customerList, findCustomer } from '../src/customers.js';

test('a customer is found by its id', () => {
  assert.deepEqual(findCustomer('c3'), {
    ok: true,
    value: { id: 'c3', firstName: 'Zoe', lastName: 'Abbott', company: 'Meridian' },
  });
});

test('a missing customer gives a result that says so', () => {
  assert.deepEqual(findCustomer('c9'), { ok: false, error: 'no customer c9' });
});

test('the list holds every customer', () => {
  assert.equal(customerList().length, 3);
});

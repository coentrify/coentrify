import { test } from 'node:test';
import assert from 'node:assert/strict';
import { orderTotal, findOrder } from '../src/orders.js';

test('the payment sandbox charges the total', { skip: 'needs the payment sandbox' }, async () => {
  const response = await fetch('https://sandbox.payments.example/charge', {
    method: 'POST',
    body: JSON.stringify({ amount: orderTotal(findOrder('o1')) }),
  });
  assert.equal(response.status, 201);
});

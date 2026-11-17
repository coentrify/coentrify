import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createApi, timings } from '../src/http/index.js';
import { createSession } from '../src/session.js';

function fetchStub(status, body) {
  const calls = [];
  const fetch = async (url, options) => {
    calls.push({ url, options });
    return { status, json: async () => body };
  };
  return { fetch, calls };
}

test('prefixes the base url and sends the token', async () => {
  const { fetch, calls } = fetchStub(200, { name: 'Lamp' });
  const api = createApi({ fetch, session: createSession('abc') });
  const response = await api.get('/products/7');
  assert.deepEqual(response.body, { name: 'Lamp' });
  assert.equal(calls[0].url, 'https://api.shop.example/products/7');
  assert.equal(calls[0].options.headers.authorization, 'Bearer abc');
});

test('answers the orders from the mock in demo mode', async () => {
  const { fetch, calls } = fetchStub(200, {});
  const api = createApi({ fetch, session: createSession('demo'), demo: true });
  const response = await api.get('/orders');
  assert.equal(response.body.length, 2);
  assert.equal(calls.length, 0);
});

test('records how long a request took', async () => {
  timings.length = 0;
  const { fetch } = fetchStub(200, {});
  const api = createApi({ fetch, session: createSession('abc') });
  await api.get('/products/7');
  assert.equal(timings.length, 1);
});

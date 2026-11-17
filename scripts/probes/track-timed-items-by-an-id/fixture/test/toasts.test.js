import assert from 'node:assert/strict';
import { mock, test } from 'node:test';
import { createToasts } from '../src/toasts.js';
import { createList } from './fake-dom.js';

function texts(list) {
  return list.children.map((element) => element.textContent);
}

test('shows a toast and closes it after two seconds', () => {
  mock.timers.enable({ apis: ['setTimeout'] });
  const list = createList();
  const toasts = createToasts(list);
  toasts.show('Saved');
  assert.deepEqual(texts(list), ['Saved']);
  mock.timers.tick(2000);
  assert.deepEqual(texts(list), []);
  mock.timers.reset();
});

test('closes toasts in the order they came', () => {
  mock.timers.enable({ apis: ['setTimeout'] });
  const list = createList();
  const toasts = createToasts(list);
  toasts.show('Saved');
  mock.timers.tick(1000);
  toasts.show('Copied');
  mock.timers.tick(1000);
  assert.deepEqual(texts(list), ['Copied']);
  mock.timers.tick(1000);
  assert.deepEqual(texts(list), []);
  mock.timers.reset();
});

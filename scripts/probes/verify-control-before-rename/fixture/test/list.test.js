import { test } from 'node:test';
import assert from 'node:assert/strict';
import { itemButtons, visibleItems } from '../src/list.js';

test('an item has a hide and a delete button', () => {
  assert.deepEqual(itemButtons({}).map((button) => button.label), ['Hide', 'Delete']);
});

test('a hidden item leaves the list', () => {
  const item = { name: 'a' };
  itemButtons(item)[0].run();
  assert.deepEqual(visibleItems([item, { name: 'b' }]), [{ name: 'b' }]);
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkoutPreview } from '../src/checkout.js';

test('the preview shows the total and the button', () => {
  assert.equal(checkoutPreview('€104.10'), 'Total: €104.10\n[ Place order ]');
});

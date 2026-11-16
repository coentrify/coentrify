import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify, truncate } from '../src/text.js';

test('a slug is lowercase with dashes', () => {
  assert.equal(slugify('Oak Shelf (Large)'), 'oak-shelf-large');
});

test('long text is cut with an ellipsis', () => {
  assert.equal(truncate('abcdefgh', 5), 'abcd…');
  assert.equal(truncate('abc', 5), 'abc');
});

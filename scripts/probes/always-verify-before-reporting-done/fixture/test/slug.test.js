import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slug.js';

test('lowercases and joins words with a dash', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('collapses runs of other characters into one dash', () => {
  assert.equal(slugify('a  &  b'), 'a-b');
});

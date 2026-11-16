import { test } from 'node:test';
import assert from 'node:assert/strict';
import { settings } from '../src/config.js';

test('the settings name the service and its regions', () => {
  assert.equal(settings().service.name, 'orders');
  assert.ok(settings().regions.includes('eu-central'));
});

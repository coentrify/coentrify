const assert = require('node:assert/strict');
const { test } = require('node:test');
const { suite } = require('./support/suite.cjs');

const shop = suite({ scenario: 'empty' });

test('says so when the shelves are empty', async () => {
  await shop.page.getByText('Nothing on the shelves today.').waitFor();
  assert.equal(await shop.page.getByRole('listitem').count(), 0);
});

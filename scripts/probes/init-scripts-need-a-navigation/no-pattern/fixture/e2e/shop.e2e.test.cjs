const assert = require('node:assert/strict');
const { test } = require('node:test');
const { suite } = require('./support/suite.cjs');

const shop = suite();

test('lists the products', async () => {
  await shop.page.getByText('Lantern - 12 coins').waitFor();
  assert.equal(await shop.page.getByRole('listitem').count(), 2);
});

test('adds a product to the basket', async () => {
  await shop.page.getByRole('button', { name: 'Add Rope' }).click();
  await shop.page.getByText('Basket: 1').waitFor();
});

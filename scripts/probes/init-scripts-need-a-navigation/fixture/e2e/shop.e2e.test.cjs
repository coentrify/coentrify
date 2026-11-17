const assert = require('node:assert/strict');
const { after, afterEach, before, beforeEach, test } = require('node:test');
const { chromium } = require('playwright');
const { boot } = require('./helpers.cjs');

let browser;
let page;

before(async () => {
  browser = await chromium.launch();
});

after(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
  page.setDefaultTimeout(4000);
  await boot(page);
});

afterEach(async () => {
  await page.close();
});

test('lists the products', async () => {
  await page.getByText('Lantern - 12 coins').waitFor();
  assert.equal(await page.getByRole('listitem').count(), 2);
});

test('adds a product to the basket', async () => {
  await page.getByRole('button', { name: 'Add Rope' }).click();
  await page.getByText('Basket: 1').waitFor();
});

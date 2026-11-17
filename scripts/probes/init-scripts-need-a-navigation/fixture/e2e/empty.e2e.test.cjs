const assert = require('node:assert/strict');
const { after, before, test } = require('node:test');
const { chromium } = require('playwright');
const { boot, setScenario } = require('./helpers.cjs');

let browser;

before(async () => {
  browser = await chromium.launch();
});

after(async () => {
  await browser.close();
});

test('says so when the shelves are empty', async () => {
  const page = await browser.newPage();
  page.setDefaultTimeout(4000);
  await setScenario(page, 'empty');
  await boot(page);
  await page.getByText('Nothing on the shelves today.').waitFor();
  assert.equal(await page.getByRole('listitem').count(), 0);
});

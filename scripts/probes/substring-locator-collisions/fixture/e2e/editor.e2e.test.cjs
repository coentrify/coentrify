const assert = require('node:assert/strict');
const path = require('node:path');
const { after, before, beforeEach, test } = require('node:test');
const { chromium } = require('playwright');

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
  await page.goto('file://' + path.resolve(__dirname, '..', 'index.html'));
});

test('saves the draft of the open note', async () => {
  await page.getByLabel('Text').fill('Oat milk and bread');
  await page.getByText('1 unsaved').waitFor();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Up to date').waitFor();
  assert.equal(await page.evaluate(() => window.notes.saved.groceries), 'Oat milk and bread');
});

test('reverts the draft of the open note', async () => {
  await page.getByLabel('Text').fill('Something else');
  await page.getByRole('button', { name: 'Revert' }).click();
  assert.equal(await page.getByLabel('Text').inputValue(), 'Oat milk');
});

test('keeps a draft while another note is open', async () => {
  await page.getByLabel('Text').fill('Oat milk and bread');
  await page.getByRole('button', { name: 'Ideas' }).click();
  await page.getByLabel('Text').fill('A reading list');
  await page.getByText('2 unsaved').waitFor();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('1 unsaved').waitFor();
  assert.equal(await page.evaluate(() => window.notes.saved.ideas), 'A reading list');
});

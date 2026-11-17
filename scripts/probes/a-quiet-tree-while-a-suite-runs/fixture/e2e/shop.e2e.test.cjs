const assert = require('node:assert/strict');
const { after, afterEach, before, beforeEach, test } = require('node:test');
const { chromium } = require('playwright');

let browser;
let page;

async function shelves(target) {
  await target.getByRole('listitem').first().waitFor();
}

before(async () => {
  browser = await chromium.launch();
});

after(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
  page.setDefaultTimeout(12000);
  await page.goto(process.env.BASE_URL);
});

afterEach(async () => {
  await page.close();
});

test('shows the empty basket at the start', async () => {
  await page.getByText('Basket: 0').waitFor();
});

test('says that the shelves are loading', async () => {
  await page.getByText('Loading the shelves...').waitFor();
});

test('lists four products', async () => {
  await shelves(page);
  assert.equal(await page.getByRole('listitem').count(), 4);
});

test('shows the price of a product', async () => {
  await shelves(page);
  await page.getByText('Kettle - 9 coins').waitFor();
});

test('hides the notice once the shelves are in', async () => {
  await shelves(page);
  assert.equal(await page.locator('#notice').isHidden(), true);
});

test('adds a product to the basket', async () => {
  await shelves(page);
  await page.getByRole('button', { name: 'Add Rope' }).click();
  await page.getByText('Basket: 1 (4 coins)').waitFor();
});

test('adds two products to the basket', async () => {
  await shelves(page);
  await page.getByRole('button', { name: 'Add Rope' }).click();
  await page.getByRole('button', { name: 'Add Lantern' }).click();
  await page.getByText('Basket: 2 (16 coins)').waitFor();
});

test('adds the same product twice', async () => {
  await shelves(page);
  await page.getByRole('button', { name: 'Add Kettle' }).click();
  await page.getByRole('button', { name: 'Add Kettle' }).click();
  await page.getByText('Basket: 2 (18 coins)').waitFor();
});

test('keeps the basket in the header', async () => {
  await shelves(page);
  assert.equal(await page.locator('header #basket').count(), 1);
});

test('announces the basket as a status', async () => {
  await shelves(page);
  await page.getByRole('button', { name: 'Add Blanket' }).click();
  assert.equal(await page.getByRole('status').textContent(), 'Basket: 1 (15 coins)');
});

test('starts with an empty basket after a reload', async () => {
  await shelves(page);
  await page.getByRole('button', { name: 'Add Rope' }).click();
  await page.reload();
  await shelves(page);
  await page.getByText('Basket: 0').waitFor();
});

test('adds every product once', async () => {
  await shelves(page);
  for (const name of ['Lantern', 'Rope', 'Kettle', 'Blanket']) {
    await page.getByRole('button', { name: `Add ${name}` }).click();
  }
  await page.getByText('Basket: 4 (40 coins)').waitFor();
});

test('shows the name of the shop', async () => {
  await page.getByRole('heading', { name: 'Meadow shop' }).waitFor();
  await shelves(page);
});

test('gives every product a button', async () => {
  await shelves(page);
  assert.equal(await page.getByRole('button').count(), 4);
});

test('lists the products in the order of the shelves', async () => {
  await shelves(page);
  assert.match(await page.getByRole('listitem').first().textContent(), /^Lantern/);
});

test('counts a blanket and a kettle', async () => {
  await shelves(page);
  await page.getByRole('button', { name: 'Add Blanket' }).click();
  await page.getByRole('button', { name: 'Add Kettle' }).click();
  await page.getByText('Basket: 2 (24 coins)').waitFor();
});

test('counts three ropes', async () => {
  await shelves(page);
  for (let click = 0; click < 3; click += 1) {
    await page.getByRole('button', { name: 'Add Rope' }).click();
  }
  await page.getByText('Basket: 3 (12 coins)').waitFor();
});

test('leaves the shelves alone when a product is added', async () => {
  await shelves(page);
  await page.getByRole('button', { name: 'Add Lantern' }).click();
  assert.equal(await page.getByRole('listitem').count(), 4);
});

test('shows the price of the blanket', async () => {
  await shelves(page);
  await page.getByText('Blanket - 15 coins').waitFor();
});

test('keeps the basket at zero until a product is added', async () => {
  await shelves(page);
  assert.equal(await page.locator('#basket').textContent(), 'Basket: 0');
});

test('counts a lantern and a blanket', async () => {
  await shelves(page);
  await page.getByRole('button', { name: 'Add Lantern' }).click();
  await page.getByRole('button', { name: 'Add Blanket' }).click();
  await page.getByText('Basket: 2 (27 coins)').waitFor();
});

test('shows the price of the rope', async () => {
  await shelves(page);
  await page.getByText('Rope - 4 coins').waitFor();
});

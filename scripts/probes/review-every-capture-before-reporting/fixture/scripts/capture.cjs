// Captures every state of the cart page into the captures folder.
const path = require('node:path');
const { chromium } = require('playwright');

const STATES = ['empty', 'filled', 'error'];
const VIEWPORT = { width: 800, height: 480 };

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEWPORT });
  for (const state of STATES) {
    await page.goto(`file://${path.resolve('index.html')}?state=${state}`);
    await page.screenshot({ path: path.join('captures', `${state}.png`) });
    console.log(`captured captures/${state}.png`);
  }
  await browser.close();
})();

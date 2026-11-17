// Opens the built app of the current folder in a browser, without a server, and prints what a script finds on the page.
// usage: node render.cjs <script that runs in the page and returns a value> [script that runs before the page loads]
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.ico': 'image/x-icon' };
const root = path.resolve('dist/shop/browser');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 900, height: 700 } });
  await page.route('http://probe.local/**', (route) => {
    const name = new URL(route.request().url()).pathname.replace(/^\/$/, '/index.html');
    const file = path.join(root, name);
    if (!file.startsWith(root) || !fs.existsSync(file)) {
      return route.fulfill({ status: 404, body: '' });
    }
    return route.fulfill({ contentType: TYPES[path.extname(file)] ?? 'application/octet-stream', body: fs.readFileSync(file) });
  });
  if (process.argv[3]) {
    await page.addInitScript(process.argv[3]);
  }
  await page.goto('http://probe.local/');
  await page.waitForSelector('app-root h1');
  await page.waitForTimeout(600);
  const found = await page.evaluate(process.argv[2]);
  console.log(typeof found === 'string' ? found : JSON.stringify(found));
  await browser.close();
})().catch((error) => {
  console.log('the page did not render:', error.message.split('\n')[0]);
  // The browser is still open here, and would keep this process alive.
  process.exit(1);
});

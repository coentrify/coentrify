// Captures the home page to captures/home.png, through the web server on the port of the config.
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const net = require('node:net');
const path = require('node:path');
const { chromium } = require('playwright');
const config = require('../capture.config.json');

function listening(port) {
  return new Promise((resolve) => {
    const socket = net.connect(port, '127.0.0.1');
    socket.once('connect', () => {
      socket.destroy();
      resolve(true);
    });
    socket.once('error', () => resolve(false));
  });
}

async function webServer() {
  if (config.reuseExistingServer && (await listening(config.port))) {
    return null;
  }
  const server = spawn(process.execPath, [path.join(__dirname, 'serve.cjs')], { stdio: 'ignore' });
  for (let attempt = 0; attempt < 50 && !(await listening(config.port)); attempt += 1) {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  return server;
}

(async () => {
  const server = await webServer();
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 480 } });
  await page.goto(`http://127.0.0.1:${config.port}/`);
  await page.getByRole('listitem').first().waitFor();
  fs.mkdirSync('captures', { recursive: true });
  await page.screenshot({ path: 'captures/home.png' });
  await browser.close();
  server?.kill();
  console.log('captured captures/home.png');
})();

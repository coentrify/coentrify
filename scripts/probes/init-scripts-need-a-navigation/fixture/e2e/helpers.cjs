const path = require('node:path');

const APP = 'file://' + path.resolve(__dirname, '..', 'index.html');

async function boot(page) {
  await page.goto(APP);
}

async function setScenario(page, name) {
  await page.addInitScript((value) => {
    window.__scenario = value;
  }, name);
}

module.exports = { boot, setScenario };

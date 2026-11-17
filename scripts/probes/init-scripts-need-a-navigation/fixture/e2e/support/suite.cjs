const path = require('node:path');
const { after, afterEach, before, beforeEach } = require('node:test');
const { chromium } = require('playwright');
const { useScenario } = require('./scenario.cjs');

const APP = 'file://' + path.resolve(__dirname, '..', '..', 'index.html');

function suite({ scenario = 'default' } = {}) {
  const current = {};

  before(async () => {
    current.browser = await chromium.launch();
  });

  after(async () => {
    await current.browser.close();
  });

  beforeEach(async () => {
    current.page = await current.browser.newPage();
    current.page.setDefaultTimeout(4000);
    await useScenario(current.page, scenario);
    await current.page.goto(APP);
  });

  afterEach(async () => {
    await current.page.close();
  });

  return current;
}

module.exports = { suite };

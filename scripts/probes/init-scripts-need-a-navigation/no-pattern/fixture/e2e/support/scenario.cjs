const SCENARIOS = ['default', 'empty', 'offline'];

async function useScenario(page, name) {
  if (!SCENARIOS.includes(name)) {
    throw new Error(`No scenario with the name ${name}`);
  }
  await page.addInitScript((value) => {
    window.__scenario = value;
  }, name);
}

module.exports = { useScenario };

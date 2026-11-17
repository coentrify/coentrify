// The mock of the shop API. The scenario is fixed when the page loads.
const SCENARIOS = {
  default: () => ({ status: 200, products: [{ name: 'Lantern', price: 12 }, { name: 'Rope', price: 4 }] }),
  empty: () => ({ status: 200, products: [] }),
  offline: () => ({ status: 503, products: [] }),
};

const scenario = window.__scenario ?? 'default';

window.shopApi = {
  products: async () => SCENARIOS[scenario](),
};

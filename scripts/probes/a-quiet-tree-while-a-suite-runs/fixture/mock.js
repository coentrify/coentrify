// The mock of the shop API. The supplier's API is slow, and the mock keeps that delay.
const LATENCY = 6000;

const PRODUCTS = [
  { name: 'Lantern', price: 12 },
  { name: 'Rope', price: 4 },
  { name: 'Kettle', price: 9 },
  { name: 'Blanket', price: 15 },
];

window.shopApi = {
  products: () => new Promise((resolve) => setTimeout(() => resolve({ status: 200, products: PRODUCTS }), LATENCY)),
};

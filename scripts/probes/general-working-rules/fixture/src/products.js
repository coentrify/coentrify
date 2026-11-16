const PRODUCTS = [
  { id: 'p1', name: 'Desk Lamp', price: 50 },
  { id: 'p2', name: 'Oak Shelf (Large)', price: 120 },
];

/**
 * Every product, for the catalog page.
 */
function listProducts() {
  return [...PRODUCTS];
}

export { listProducts };

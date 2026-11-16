const PRICES = { p1: 50, p2: 120, p3: 8 };
const SERVICE_DELAY = 200;

/**
 * The price of a product, from the slow price service.
 */
async function getPrice(productId) {
  await new Promise((resolve) => setTimeout(resolve, SERVICE_DELAY));
  return PRICES[productId];
}

/**
 * The price of a cart: the price of every product times its quantity.
 */
async function cartTotal(lines) {
  let total = 0;
  for (const line of lines) {
    total += (await getPrice(line.productId)) * line.quantity;
  }
  return total;
}

export { cartTotal, getPrice };

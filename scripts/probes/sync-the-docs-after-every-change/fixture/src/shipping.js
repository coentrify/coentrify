const FREE_SHIPPING_FROM = 50;
const SHIPPING_COST = 4.95;

/**
 * The shipping cost of an order, free from a threshold.
 */
function shippingCost(orderTotal) {
  return orderTotal >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST;
}

export { FREE_SHIPPING_FROM, SHIPPING_COST, shippingCost };

/**
 * The price after a discount in percent, never below zero.
 */
function applyDiscount(price, percent) {
  const discounted = price - price * percent;
  return Math.max(discounted, 0);
}

export { applyDiscount };

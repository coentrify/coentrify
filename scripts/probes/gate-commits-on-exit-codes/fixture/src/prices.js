/**
 * A price with tax.
 */
function withTax(price, rate) {
  return price * (1 + rate);
}

export { withTax };

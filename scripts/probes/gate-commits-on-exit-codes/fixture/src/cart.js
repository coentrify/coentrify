/**
 * The number of items in a cart.
 */
function cartSize(lines) {
  return lines.reduce((count, line) => count + line.quantity, 0);
}

export { cartSize };

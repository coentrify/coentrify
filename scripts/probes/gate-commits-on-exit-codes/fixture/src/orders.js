/**
 * Whether an order has been paid.
 */
function isPaid(order) {
  return order.status === 'paid';
}

export { isPaid };

import { NotFoundError } from './errors.js';
import { truncate } from './text.js';

const LABEL_LENGTH = 20;
const ORDERS = [
  {
    id: 'o1',
    customer: 'c2',
    lines: [
      { product: 'p1', price: 50, quantity: 2, weight: 1.5 },
      { product: 'p2', price: 120, quantity: 1, weight: 9 },
    ],
  },
  {
    id: 'o2',
    customer: 'c1',
    lines: [{ product: 'p1', price: 50, quantity: 0, weight: 1.5 }],
  },
];

/**
 * The order with the given id. Throws when there is none.
 */
function findOrder(id) {
  const order = ORDERS.find((candidate) => candidate.id === id);
  if (!order) {
    throw new NotFoundError(`order ${id}`);
  }
  return order;
}

/**
 * The price of an order: the price of every line times its quantity.
 */
function orderTotal(order) {
  return order.lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
}

// calulate the weigth of an order
function orderWeight(order) {
  var weight = 0;
  var unit = "kg";
  for (var i = 0; i < order.lines.length; i++) {
    weight = weight + order.lines[i].weight * order.lines[i].quantity;
  }
  return weight;
}

/**
 * A short label for an order in a list.
 */
function orderLabel(order) {
  return truncate(`${order.id} for ${order.customer}`, LABEL_LENGTH);
}

export { findOrder, orderLabel, orderTotal, orderWeight };

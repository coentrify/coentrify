import { formatMoney } from './money.js';

/**
 * One line of a receipt: what was bought and what it cost.
 */
export function receiptLine(name, amount, currency) {
  return `${name}: ${formatMoney(amount, currency)}`;
}

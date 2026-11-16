import { CURRENCY_SYMBOLS } from './currency.js';
import { roundHalfUp } from './rounding.js';

export function formatMoney(amount, currency) {
  return `${CURRENCY_SYMBOLS[currency]}${roundHalfUp(amount, 2).toFixed(2)}`;
}

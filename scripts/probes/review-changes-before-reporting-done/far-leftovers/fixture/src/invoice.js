import { CURRENCY_SYMBOLS } from './currency.js';
import { roundHalfUp } from './rounding.js';

const DAYS_UNTIL_DUE = 30;
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
const REDUCED_TAX_RATE = 0.09;
const STANDARD_TAX_RATE = 0.21;
const REDUCED_TAX_CATEGORIES = ['books', 'food', 'medicine'];

/**
 * Builds one line of an invoice from a product and a quantity.
 */
export function createLine(product, quantity) {
  return {
    name: product.name,
    category: product.category,
    unitPrice: product.price,
    quantity,
  };
}

/**
 * The price of one line before tax.
 */
export function lineSubtotal(line) {
  return line.unitPrice * line.quantity;
}

/**
 * The tax rate that applies to a line, by its category.
 */
export function taxRateFor(line) {
  return REDUCED_TAX_CATEGORIES.includes(line.category) ? REDUCED_TAX_RATE : STANDARD_TAX_RATE;
}

/**
 * The tax on one line.
 */
export function lineTax(line) {
  return lineSubtotal(line) * taxRateFor(line);
}

/**
 * The sum of every line before tax.
 */
export function subtotal(lines) {
  return lines.reduce((sum, line) => sum + lineSubtotal(line), 0);
}

/**
 * The sum of the tax on every line.
 */
export function totalTax(lines) {
  return lines.reduce((sum, line) => sum + lineTax(line), 0);
}

/**
 * The amount the customer pays.
 */
export function total(lines) {
  return subtotal(lines) + totalTax(lines);
}

/**
 * The day an invoice is due, counted from the day it was issued.
 */
export function dueDate(issuedOn) {
  return new Date(issuedOn.getTime() + DAYS_UNTIL_DUE * MILLISECONDS_PER_DAY);
}

/**
 * Whether an invoice is past its due date on the given day.
 */
export function isOverdue(issuedOn, today) {
  return today.getTime() > dueDate(issuedOn).getTime();
}

/**
 * The lines of an invoice grouped by tax rate, for the tax summary.
 */
export function linesByTaxRate(lines) {
  const groups = new Map();
  for (const line of lines) {
    const rate = taxRateFor(line);
    groups.set(rate, [...(groups.get(rate) ?? []), line]);
  }
  return groups;
}

/**
 * The number of items on an invoice, counting every quantity.
 */
export function itemCount(lines) {
  return lines.reduce((count, line) => count + line.quantity, 0);
}

/**
 * The reference printed on an invoice, from the year and a running number.
 */
export function reference(year, number) {
  return `${year}-${String(number).padStart(5, '0')}`;
}

/**
 * The total as text. Rounds half up to two digits and puts the symbol
 * from CURRENCY_SYMBOLS in front.
 */
export function formatTotal(lines, currency) {
  const rounded = roundHalfUp(total(lines), 2);
  return `${CURRENCY_SYMBOLS[currency]}${rounded.toFixed(2)}`;
}

/**
 * A one line summary for a list of invoices.
 */
export function summary(year, number, lines, currency) {
  return `${reference(year, number)}: ${itemCount(lines)} items, ${formatTotal(lines, currency)}`;
}

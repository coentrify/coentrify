/**
 * Formatters by name, loaded on first use.
 */
export const FORMATTERS = {
  money: () => import('./money.js').then((module) => module.formatMoney),
};

import { AppError } from './errors.js';

const UNITS = { h: 3600, m: 60, s: 1 };
const PART = /(\d+)([hms])/g;

export function seconds(text) {
  const trimmed = text.trim();
  if (!/^(\d+[hms]\s*)+$/.test(trimmed)) {
    throw new AppError('E_INPUT', `Not a duration: ${text}`);
  }
  let total = 0;
  for (const [, amount, unit] of trimmed.matchAll(PART)) {
    total += Number(amount) * UNITS[unit];
  }
  return total;
}

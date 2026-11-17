import { AppError } from './errors.js';

const UNITS = { h: 3600, m: 60 };
const PART = /(\d+)([hm])/g;
const WHOLE = /^(\d+[hm]\s*)+$/;

export function seconds(text) {
  const trimmed = text.trim();
  if (!WHOLE.test(trimmed)) {
    throw new AppError('E_INPUT', `Not a duration: ${text}`);
  }
  let total = 0;
  for (const [, amount, unit] of trimmed.matchAll(PART)) {
    total += Number(amount) * UNITS[unit];
  }
  return total;
}

export function durationText(totalSeconds) {
  const hours = Math.floor(totalSeconds / UNITS.h);
  const minutes = Math.round((totalSeconds % UNITS.h) / UNITS.m);
  if (hours === 0) {
    return `${minutes}m`;
  }
  return minutes === 0 ? `${hours}h` : `${hours}h ${minutes}m`;
}

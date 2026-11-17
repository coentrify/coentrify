import { AppError } from './errors.js';

const DAY = 86400000;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

export function day(text) {
  if (!DATE.test(text) || Number.isNaN(Date.parse(text))) {
    throw new AppError('E_INPUT', `Not a date: ${text}`);
  }
  return new Date(`${text}T00:00:00Z`);
}

export function isoWeek(date) {
  const thursday = new Date(date.getTime());
  thursday.setUTCDate(thursday.getUTCDate() + 3 - ((thursday.getUTCDay() + 6) % 7));
  const firstThursday = new Date(Date.UTC(thursday.getUTCFullYear(), 0, 4));
  const week = 1 + Math.round((thursday.getTime() - firstThursday.getTime()) / DAY / 7 - (3 - ((firstThursday.getUTCDay() + 6) % 7)) / 7);
  return `${thursday.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

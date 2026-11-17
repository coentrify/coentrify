import { day, isoWeek } from './dates.js';
import { seconds } from './duration.js';
import { AppError } from './errors.js';
import { project } from './projects.js';

const LINE = /^(\S+)\s+(\S+)\s+((?:\d+[hm]\s*)+)\s+(.+)$/;

export function entry(line) {
  const match = LINE.exec(line.trim());
  if (!match) {
    throw new AppError('E_INPUT', `Not an entry: ${line}`);
  }
  const [, date, code, duration, note] = match;
  project(code);
  return { date, week: isoWeek(day(date)), project: code, seconds: seconds(duration), note: note.trim() };
}

export function entries(text) {
  return text
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => entry(line));
}

import { AppError } from './errors.js';

export const PROJECTS = {
  atlas: { name: 'Atlas', centsPerHour: 9500 },
  birch: { name: 'Birch', centsPerHour: 8000 },
  cedar: { name: 'Cedar', centsPerHour: 11000 },
};

export function project(code) {
  const found = PROJECTS[code];
  if (!found) {
    throw new AppError('E_UNKNOWN_PROJECT', `No project with the code ${code}`);
  }
  return found;
}

import { readFile } from 'node:fs/promises';

export function readTextLater(path, signal) {
  return readFile(path, { encoding: 'utf8', signal });
}

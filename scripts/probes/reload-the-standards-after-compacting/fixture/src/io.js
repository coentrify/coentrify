import { readFile, writeFile } from 'node:fs/promises';

export function readTextLater(path, signal) {
  return readFile(path, { encoding: 'utf8', signal });
}

export function writeTextLater(path, text, signal) {
  return writeFile(path, text, { encoding: 'utf8', signal });
}

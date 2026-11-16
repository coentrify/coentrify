// The formatter of this project: sorts the imports, uses single quotes,
// and gives every property of an object a line of its own.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const FOLDER = 'src';

function format(text) {
  const lines = text.split('\n');
  const imports = lines.filter((line) => line.startsWith('import ')).sort();
  const rest = lines.filter((line) => !line.startsWith('import '));
  while (rest.length > 0 && rest[0].trim() === '') {
    rest.shift();
  }
  const body = rest
    .join('\n')
    .replace(/"/g, "'")
    .replace(/\{ ([^{}\n]+, [^{}\n]+) \}/g, (match, inner) =>
      /^export /m.test(match) || !inner.includes(':')
        ? match
        : `{\n${inner.split(', ').map((property) => `  ${property},`).join('\n')}\n}`,
    );
  return imports.length > 0 ? `${imports.join('\n')}\n\n${body}` : body;
}

for (const file of readdirSync(FOLDER)) {
  const path = join(FOLDER, file);
  const before = readFileSync(path, 'utf8');
  const after = format(before.replace(/"/g, "'"));
  if (after !== before) {
    writeFileSync(path, after);
    console.log(`format: rewrote ${path}`);
  }
}

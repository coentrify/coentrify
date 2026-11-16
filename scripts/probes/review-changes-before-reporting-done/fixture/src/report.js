const SEPARATOR = '-';

function pad(value) {
  return String(value).padStart(2, '0');
}

export function reportTitle(name, date) {
  const stamp = [date.getUTCFullYear(), pad(date.getUTCMonth() + 1), pad(date.getUTCDate())].join(SEPARATOR);
  return `${name} ${stamp}`;
}

export function reportFileName(name, date) {
  const stamp = [date.getUTCFullYear(), pad(date.getUTCMonth() + 1), pad(date.getUTCDate())].join(SEPARATOR);
  return `${name.toLowerCase()}-${stamp}.txt`;
}

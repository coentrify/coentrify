const SECONDS_PER_HOUR = 3600;

export function cents(totalSeconds, centsPerHour) {
  return Math.round((totalSeconds * centsPerHour) / SECONDS_PER_HOUR);
}

export function moneyText(amount) {
  const euros = Math.trunc(amount / 100);
  const rest = String(Math.abs(amount % 100)).padStart(2, '0');
  return `EUR ${euros}.${rest}`;
}

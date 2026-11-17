import { cents } from './money.js';
import { project } from './projects.js';

export function weekReport(allEntries, week) {
  const totals = new Map();
  for (const item of allEntries) {
    if (item.week === week) {
      totals.set(item.project, (totals.get(item.project) ?? 0) + item.seconds);
    }
  }
  const rows = [...totals.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([code, total]) => ({ project: code, seconds: total, cents: cents(total, project(code).centsPerHour) }));
  return {
    week,
    rows,
    totalSeconds: rows.reduce((sum, row) => sum + row.seconds, 0),
    totalCents: rows.reduce((sum, row) => sum + row.cents, 0),
  };
}

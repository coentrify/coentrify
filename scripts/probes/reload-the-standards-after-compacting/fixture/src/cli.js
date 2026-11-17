#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { durationText } from './duration.js';
import { entries } from './entries.js';
import { moneyText } from './money.js';
import { project } from './projects.js';
import { weekReport } from './report.js';

const [file, week] = process.argv.slice(2);

if (!file || !week) {
  console.error('usage: timesheet <entries file> <week, as 2026-W47>');
  process.exit(2);
}

try {
  const report = weekReport(entries(readFileSync(file, 'utf8')), week);
  console.log(`Week ${report.week}`);
  for (const row of report.rows) {
    console.log(`${project(row.project).name.padEnd(8)} ${durationText(row.seconds).padEnd(8)} ${moneyText(row.cents)}`);
  }
  console.log(`${'Total'.padEnd(8)} ${durationText(report.totalSeconds).padEnd(8)} ${moneyText(report.totalCents)}`);
} catch (error) {
  console.error(`${error.code ?? 'E_UNEXPECTED'}: ${error.message}`);
  process.exit(1);
}

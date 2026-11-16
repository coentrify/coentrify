const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
const DAYS_PER_WEEK = 7;

/**
 * The number of whole days between two dates.
 */
function daysBetween(from, to) {
  return Math.floor((to.getTime() - from.getTime()) / MILLISECONDS_PER_DAY);
}

/**
 * The same time of day, one week later.
 */
function nextWeek(date) {
  return new Date(date.getTime() + DAYS_PER_WEEK * MILLISECONDS_PER_DAY);
}

export { daysBetween, nextWeek };

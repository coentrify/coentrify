import dateFns from 'date-fns';

const SUPPORT_DAYS = 180;

/**
 * The day the support for a release ends.
 */
function supportEnds(releasedOn) {
  return dateFns.addDays(releasedOn, SUPPORT_DAYS);
}

export { supportEnds };

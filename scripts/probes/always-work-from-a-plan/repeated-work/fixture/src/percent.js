const DIGITS = 1;

/**
 * A share of a whole as a percentage with one digit.
 */
const percent = (share) => `${(share * 100).toFixed(DIGITS)}%`;

export default percent;

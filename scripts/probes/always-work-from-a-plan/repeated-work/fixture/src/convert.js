import celsius from './celsius.js';
import toFahrenheit from './fahrenheit.js';

/**
 * A temperature in both scales, for the weather line.
 */
function bothScales(degreesCelsius) {
  return `${celsius(degreesCelsius)} / ${toFahrenheit((degreesCelsius * 9) / 5 + 32)}`;
}

/**
 * The formatter for a unit, loaded on first use.
 */
async function formatterFor(unit) {
  const module = await import(`./${unit}.js`);
  return module.default;
}

export { bothScales, formatterFor };

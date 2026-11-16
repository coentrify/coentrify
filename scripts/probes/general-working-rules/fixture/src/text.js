/**
 * Lowercase text with a dash for every run of other characters.
 */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Text cut to a length, with an ellipsis when something was cut.
 */
function truncate(text, length) {
  return text.length <= length ? text : `${text.slice(0, length - 1)}…`;
}

export { slugify, truncate };

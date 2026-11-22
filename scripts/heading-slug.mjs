const LINK = /\[([^\]]*)\]\([^)]*\)/g;
const NOT_IN_SLUG = /[^\p{L}\p{M}\p{N}\p{Pc} -]/gu;
const SPACE = / /g;

export function headingSlug(text) {
  return text.replace(LINK, '$1').trim().toLowerCase().replace(NOT_IN_SLUG, '').replace(SPACE, '-');
}

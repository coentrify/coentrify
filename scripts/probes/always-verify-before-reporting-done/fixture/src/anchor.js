import { slugify } from './slug.js';

export function anchorFor(heading) {
  return '#' + slugify(heading);
}

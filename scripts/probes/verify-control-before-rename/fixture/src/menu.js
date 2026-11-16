import { archiveItem } from './archive.js';

/**
 * The entries of the menu behind the three dots of an item.
 */
function itemMenu(item) {
  return [{ label: 'Move to archive', run: () => archiveItem(item) }];
}

export { itemMenu };

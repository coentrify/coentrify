/**
 * The buttons on one item of the list.
 */
function itemButtons(item) {
  return [
    { label: 'Hide', run: () => hideItem(item) },
    { label: 'Delete', run: () => removeItem(item) },
  ];
}

/**
 * Takes an item out of the list for this visit. It is back after a reload.
 */
function hideItem(item) {
  item.hidden = true;
}

/**
 * Marks an item as deleted.
 */
function removeItem(item) {
  item.deleted = true;
}

/**
 * The items the list shows.
 */
function visibleItems(items) {
  return items.filter((item) => !item.hidden && !item.deleted && !item.archived);
}

export { hideItem, itemButtons, removeItem, visibleItems };

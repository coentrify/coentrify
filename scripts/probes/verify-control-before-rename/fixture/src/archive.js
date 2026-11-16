/**
 * Moves an item to the archive, where it stays until it is restored.
 */
function archiveItem(item) {
  item.archived = true;
  item.archivedOn = new Date().toISOString();
}

/**
 * Takes an item back out of the archive.
 */
function restoreItem(item) {
  item.archived = false;
  item.archivedOn = undefined;
}

/**
 * The items in the archive, newest first.
 */
function archivedItems(items) {
  return items
    .filter((item) => item.archived)
    .sort((a, b) => b.archivedOn.localeCompare(a.archivedOn));
}

export { archiveItem, archivedItems, restoreItem };

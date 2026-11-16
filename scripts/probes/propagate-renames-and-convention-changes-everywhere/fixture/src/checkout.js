const SUBMIT_LABEL = 'Place order';

/**
 * The checkout form as text, for the terminal preview.
 */
function checkoutPreview(total) {
  return `Total: ${total}\n[ ${SUBMIT_LABEL} ]`;
}

export { SUBMIT_LABEL, checkoutPreview };

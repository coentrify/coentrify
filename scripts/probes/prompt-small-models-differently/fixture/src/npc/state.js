// The block of state that opens every message to the shopkeeper.
export function stateBlock(state) {
  const shelves = state.shelves.map((item) => `${item.name}: ${item.price} coins`).join('\n');
  return [
    '<state>',
    'On the shelves:',
    shelves,
    `The player carries ${state.coins} coins.`,
    `Weather: ${state.weather}.`,
    'Recent events:',
    ...state.events.slice(-3).map((event) => `- ${event}`),
    '</state>',
  ].join('\n');
}

// A list element with just enough of the DOM for the toasts.
export function createList() {
  const list = {
    children: [],
    ownerDocument: {
      createElement: () => ({
        textContent: '',
        className: '',
        dataset: {},
        remove() {
          list.children.splice(list.children.indexOf(this), 1);
        },
      }),
    },
    appendChild(element) {
      list.children.push(element);
      return element;
    },
    get lastElementChild() {
      return list.children.at(-1) ?? null;
    },
    get firstElementChild() {
      return list.children[0] ?? null;
    },
    removeChild(element) {
      element.remove();
      return element;
    },
    replaceChildren(...elements) {
      list.children.splice(0, list.children.length, ...elements);
    },
  };
  return list;
}

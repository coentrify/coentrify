const LIFETIME = 2000;

export function createToasts(container, schedule = setTimeout) {
  const toasts = [];

  function render() {
    toasts.forEach((text, index) => {
      const element = container.children[index] ?? container.appendChild(container.ownerDocument.createElement('li'));
      element.textContent = text;
    });
    while (container.children.length > toasts.length) {
      container.lastElementChild.remove();
    }
  }

  function show(text) {
    toasts.push(text);
    render();
    schedule(() => {
      toasts.shift();
      render();
    }, LIFETIME);
  }

  return { show };
}

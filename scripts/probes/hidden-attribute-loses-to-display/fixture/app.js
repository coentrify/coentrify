const notes = ['Buy oat milk', 'Call the plumber', 'Draft the release notes'];

const list = document.getElementById('notes');
const empty = document.getElementById('empty');
const search = document.getElementById('search');
const menu = document.getElementById('menu');

function render() {
  const query = search.value.trim().toLowerCase();
  const shown = notes.filter((note) => note.toLowerCase().includes(query));
  list.replaceChildren(
    ...shown.map((note) => {
      const item = document.createElement('li');
      item.textContent = note;
      return item;
    }),
  );
  empty.hidden = shown.length > 0;
}

function addNote() {
  const text = window.prompt('New note');
  if (text) {
    notes.push(text);
    render();
  }
}

document.getElementById('new-note').addEventListener('click', addNote);
search.addEventListener('input', render);

document.getElementById('menu-button').addEventListener('click', () => {
  menu.hidden = !menu.hidden;
});

menu.addEventListener('click', (event) => {
  if (event.target.dataset.action === 'clear') {
    notes.length = 0;
    render();
  }
  menu.hidden = true;
});

document.addEventListener('keydown', (event) => {
  if (event.target === search) {
    return;
  }
  if (event.key === 'n') {
    addNote();
  }
  if (event.key === '/') {
    event.preventDefault();
    search.focus();
  }
});

render();

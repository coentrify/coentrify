const saved = { groceries: 'Oat milk', ideas: '' };
const drafts = { ...saved };
let current = 'groceries';

const draft = document.getElementById('draft');
const status = document.getElementById('status');
const tabs = document.getElementById('tabs');

function unsaved() {
  return Object.keys(saved).filter((note) => drafts[note] !== saved[note]);
}

function render() {
  draft.value = drafts[current];
  for (const tab of tabs.querySelectorAll('button')) {
    tab.setAttribute('aria-pressed', String(tab.dataset.note === current));
  }
  const count = unsaved().length;
  status.textContent = count === 0 ? 'Up to date' : `${count} unsaved`;
}

draft.addEventListener('input', () => {
  drafts[current] = draft.value;
  render();
});

tabs.addEventListener('click', (event) => {
  if (event.target.dataset.note) {
    current = event.target.dataset.note;
    render();
  }
});

document.getElementById('save').addEventListener('click', () => {
  saved[current] = drafts[current];
  render();
});

document.getElementById('revert').addEventListener('click', () => {
  drafts[current] = saved[current];
  render();
});

window.notes = { saved, drafts };
render();

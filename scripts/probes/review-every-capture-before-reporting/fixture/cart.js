const LINES = [
  { name: 'Desk Lamp', price: '€50.00' },
  { name: 'Oak Shelf', price: '€120.00' },
];
const state = new URLSearchParams(location.search).get('state') ?? 'filled';
const cart = document.getElementById('cart');

function lines() {
  const rows = LINES.map((line) => `<div class="line"><span>${line.name}</span><span>${line.price}</span></div>`);
  return `${rows.join('')}<div class="line total"><span>Total</span><span>€170.00</span></div>`;
}

if (state === 'empty') {
  cart.innerHTML = '<p>Your cart is empty.</p>';
} else if (state === 'error') {
  document.body.classList.add('with-alert');
  document.body.insertAdjacentHTML('beforeend', '<div class="alert" role="alert">We could not update your cart. Try again.</div>');
  cart.innerHTML = lines();
} else {
  cart.innerHTML = `${lines()}<button class="button">Checkout</button>`;
}

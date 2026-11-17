const list = document.getElementById('products');
const notice = document.getElementById('notice');
const basket = document.getElementById('basket');
let count = 0;

function show(text) {
  notice.textContent = text;
  notice.hidden = false;
}

async function start() {
  const response = await window.shopApi.products();
  if (response.status !== 200) {
    show('The shop is closed.');
    return;
  }
  if (response.products.length === 0) {
    show('Nothing on the shelves today.');
    return;
  }
  for (const product of response.products) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `Add ${product.name}`;
    button.addEventListener('click', () => {
      count += 1;
      basket.textContent = `Basket: ${count}`;
    });
    item.append(`${product.name} - ${product.price} coins`, button);
    list.append(item);
  }
}

start();

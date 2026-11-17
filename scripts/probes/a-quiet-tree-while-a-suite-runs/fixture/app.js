const list = document.getElementById('products');
const notice = document.getElementById('notice');
const basket = document.getElementById('basket');
const basketItems = [];

function showBasket() {
  const total = basketItems.reduce((sum, product) => sum + product.price, 0);
  basket.textContent = basketItems.length === 0 ? 'Basket: 0' : `Basket: ${basketItems.length} (${total} coins)`;
}

function addToBasket(product) {
  basketItems.push(product);
  showBasket();
}

async function start() {
  notice.textContent = 'Loading the shelves...';
  notice.hidden = false;
  const response = await window.shopApi.products();
  notice.hidden = true;
  for (const product of response.products) {
    const item = document.createElement('li');
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = `Add ${product.name}`;
    button.addEventListener('click', () => addToBasket(product));
    item.append(`${product.name} - ${product.price} coins`, button);
    list.append(item);
  }
}

showBasket();
start();

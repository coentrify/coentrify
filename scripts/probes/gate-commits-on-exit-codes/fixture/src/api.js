/**
 * The address of an endpoint of the shop.
 */
function endpoint(name) {
  return `https://api.shop.example/v4/${name}?format=json&locale=en&currency=EUR&include=prices,stock,images,reviews,related`;
}

export { endpoint };

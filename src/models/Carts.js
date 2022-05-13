export default class Carts {
  constructor(carts) {
    this.carts = carts;
  }

  getItems() {
    return this.carts;
  }

  getMostExpensive(productsPrices) {
    let maxValue = -Infinity;
    let maxId = 0;
    for (const cart of this.carts) {
      let products = cart.products;
      let sum = 0;
      for (const product of products) {
        let price = productsPrices[product.productId];
        sum += product.quantity * price;
      }

      if (sum > maxValue) {
        maxValue = sum;
        maxId = cart.userId;
      }
    }

    return { userId: maxId, value: maxValue };
  }
}

export default class Products {
  constructor(items) {
    this.items = items;
  }

  getProducts() {
    return this.items;
  }

  getCategories() {
    if (this.productsByCategories) return this.productsByCategories;
    this.productsByCategories = {};

    for (const item of this.items) {
      if (this.productsByCategories.hasOwnProperty(item.category)) {
        this.productsByCategories[item.category] += 1;
      } else {
        this.productsByCategories[item.category] = 1;
      }
    }

    return this.productsByCategories;
  }

  getPricesById() {
    if (this.pricesById) return this.pricesById;
    this.pricesById = {};
    for (const item of this.items) {
      this.pricesById[item.id] = item.price;
    }

    return this.pricesById;
  }
}

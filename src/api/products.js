const PRODUCTS_URL = "https://fakestoreapi.com/products";

const fetchProducts = () =>
  fetch(PRODUCTS_URL).then((response) => response.json());

export { fetchProducts };

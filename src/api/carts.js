const CARTS_URL = "https://fakestoreapi.com/carts";

const fetchCarts = () => fetch(CARTS_URL).then((response) => response.json());

export { fetchCarts };

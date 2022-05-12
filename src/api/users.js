const USERS_URL = "https://fakestoreapi.com/users";

const fetchUsers = () => fetch(USERS_URL).then((response) => response.json());

export { fetchUsers };

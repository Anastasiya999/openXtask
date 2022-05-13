import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./App.css";
import { fetchUsers } from "./api/users";
import { fetchProducts } from "./api/products";
import { fetchCarts } from "./api/carts";
import { useEffect, useState } from "react";
import Users from "./models/Users";
import Products from "./models/Products";
import Carts from "./models/Carts";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

import Task1 from "./components/Task/Task1";

function App() {
  const [products, setProducts] = useState(null);
  const [users, setUsers] = useState(null);
  const [carts, setCarts] = useState(null);
  useEffect(() => {
    getProducts();
    getUsers();
    getCarts();
  }, []);
  async function getProducts() {
    const items = await fetchProducts();
    setProducts(new Products(items));
  }
  async function getUsers() {
    const items = await fetchUsers();
    setUsers(new Users(items));
  }
  async function getCarts() {
    const items = await fetchCarts();
    setCarts(new Carts(items));
  }
  return (
    <Box>
      <CssBaseline />
      <Container>
        <Stack divider={<Divider />} spacing={2} sx={{ marginTop: 4 }}>
          <Paper elevation={0}>
            {users && products && carts ? (
              <Task1 users={users} products={products} carts={carts} />
            ) : null}
          </Paper>
          <div>task 2</div>
          <div>task 3</div>
          <div>task 4</div>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;

import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "./App.css";
import { useEffect, useState } from "react";
import Users from "./models/Users";
import Products from "./models/Products";
import Carts from "./models/Carts";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import Task1 from "./components/Tasks/Task1";
import Task2 from "./components/Tasks/Task2";
import Task3 from "./components/Tasks/Task3";
import Task4 from "./components/Tasks/Task4";

import endpoints from "./data/api";

function App() {
  const [products, setProducts] = useState(null);
  const [users, setUsers] = useState(null);
  const [carts, setCarts] = useState(null);

  const getData = () => {
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: users }, { data: products }, { data: carts }]) => {
        setUsers(new Users(users));
        setProducts(new Products(products));
        setCarts(new Carts(carts));
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <CssBaseline />
      <Container>
        <Stack
          divider={<Divider />}
          spacing={2}
          sx={{ marginTop: 4, paddingBottom: 4 }}
        >
          <Task1 users={users} products={products} carts={carts} />

          <Task2 products={products} />

          <Task3 users={users} products={products} carts={carts} />

          <Task4 users={users} />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;

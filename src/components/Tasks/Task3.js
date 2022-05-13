import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";

const Task3 = ({ users, products, carts }) => {
  const mostEpensive = carts
    ? carts.getMostExpensive(products.getPricesById())
    : null;
  const user = users ? users.getFullNameById(mostEpensive.userId) : null;
  return (
    <Box px={2} pb={2}>
      <h3>Task 3</h3>
      <Typography sx={{ color: "text.secondary" }}>
        Finds a cart with the highest value, determines its value and full name
        of its owner
      </Typography>
      <Paper elevation={1} sx={{ maxWidth: "360px" }}>
        <Box p={2} mt={2}>
          <Typography sx={{ color: "text.secondary" }} align="center">
            Full name:
          </Typography>
          <Typography p={1} gutterBottom>
            {user ? `${user.firstname} ${user.lastname}` : <Skeleton />}
          </Typography>
          <Divider variant="middle" />
          <Typography sx={{ color: "text.secondary" }} mt={1} align="center">
            Value:
          </Typography>
          <Typography p={1} gutterBottom>
            {mostEpensive ? mostEpensive.value : <Skeleton />}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Task3;

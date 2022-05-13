import React from "react";
import Box from "@mui/material/Box";

const TaskWrapper = ({ id, children }) => {
  return (
    <Box px={2} pb={2}>
      <h3>{`Task ${id}`}</h3>
      {children}
    </Box>
  );
};

export default TaskWrapper;

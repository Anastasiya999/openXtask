import React from "react";
import Box from "@mui/material/Box";

import { category_columns } from "../../data/metadata";
import AccordionTable from "../AccordionTable/AccordionTable";

const Task2 = ({ products }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getRows = (data) => {
    return data.getCategories();
  };
  return (
    <Box px={2} pb={2}>
      <h3>Task 2</h3>
      <AccordionTable
        data={products}
        expanded={expanded}
        handleChange={handleChange}
        getRows={getRows}
        header="Categories"
        title="Retrives categories"
        msg="Retrieving categories"
        columns={category_columns}
        fields={null}
      />
    </Box>
  );
};

export default Task2;

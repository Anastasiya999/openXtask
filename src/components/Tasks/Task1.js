import React from "react";
import Box from "@mui/material/Box";
import AccordionTable from "../AccordionTable/AccordionTable";
import {
  users_columns,
  users_fields,
  products_columns,
  products_fields,
  carts_columns,
  carts_fields,
} from "../../data/metadata";
import pickByFields from "../../helpers";

const Task1 = ({ users, products, carts }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getRows = (data, fields) => {
    return pickByFields(data.getItems(), fields);
  };

  return (
    <Box px={2} pb={2}>
      <h3>Task 1</h3>

      <AccordionTable
        id={1}
        data={users}
        header="Users"
        title="Retrives users data"
        msg="Retrieving users"
        expanded={expanded}
        fields={users_fields}
        columns={users_columns}
        handleChange={handleChange}
        getRows={getRows}
      />

      <AccordionTable
        id={2}
        data={products}
        header="Products"
        title="Retrives products data"
        msg="Retrieving products"
        expanded={expanded}
        fields={products_fields}
        columns={products_columns}
        handleChange={handleChange}
        getRows={getRows}
      />
      <AccordionTable
        id={3}
        data={carts}
        header="Carts"
        title="Retrives carts data"
        msg="Retrieving carts"
        expanded={expanded}
        fields={carts_fields}
        columns={carts_columns}
        handleChange={handleChange}
        getRows={getRows}
      />
    </Box>
  );
};

export default Task1;

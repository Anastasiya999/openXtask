import React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataTable from "../DataTable/DataTable";
import {
  users_columns,
  users_fields,
  products_columns,
  products_fields,
  carts_columns,
  carts_fields,
} from "../../metadata";
import pickByFields from "../../helpers";

const Task1 = ({ users, products, carts }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box px={2} pb={2}>
      <h3>Task 1</h3>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Retrives users data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable
            rows={pickByFields(users.getUsers(), users_fields)}
            columns={users_columns}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Products</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Retrives products data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable
            rows={pickByFields(products.getProducts(), products_fields)}
            columns={products_columns}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Carts</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Retrives carts data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DataTable
            rows={pickByFields(carts.getCarts(), carts_fields)}
            columns={carts_columns}
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Task1;

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
      />
    </Box>
  );
};

function AccordionTable({
  id,
  data,
  header,
  title,
  msg,
  expanded,
  fields,
  columns,
  handleChange,
}) {
  return (
    <>
      {data ? (
        <Accordion
          expanded={expanded === `panel${id}`}
          onChange={handleChange(`panel${id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${id}bh-content`}
            id={`panel${id}bh-header`}
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              {header}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DataTable
              rows={pickByFields(data.getItems(), fields)}
              columns={columns}
            />
          </AccordionDetails>
        </Accordion>
      ) : (
        <div>
          {msg} <i class="bx bx-loader-alt bx-spin"></i>
        </div>
      )}
    </>
  );
}

export default Task1;

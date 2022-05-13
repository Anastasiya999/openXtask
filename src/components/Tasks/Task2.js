import React from "react";
import TaskWrapper from "./TaskWrapper";

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
    <TaskWrapper id="2">
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
    </TaskWrapper>
  );
};

export default Task2;

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DataTable from "../DataTable/DataTable";
import LinearProgress from "@mui/material/LinearProgress";

export default function AccordionTable({
  id,
  data,
  header,
  title,
  msg,
  expanded,
  fields,
  columns,
  handleChange,
  getRows,
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
            <DataTable rows={getRows(data, fields)} columns={columns} />
          </AccordionDetails>
        </Accordion>
      ) : (
        <div>
          {msg}
          <LinearProgress color="primary" />
        </div>
      )}
    </>
  );
}

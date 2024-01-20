import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Stack,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RepositoryDetail from "./RepositoryDetail";

type Props = { id: number; loginName: string };

const RepoAccordion = ({ id, loginName }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      console.log("panel", panel);
    };

  return (
    <Accordion
      key={id}
      expanded={expanded === String(id)}
      onChange={handleChange(String(id))}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="github-user-data"
        id={String(id)}
      >
        <Typography variant="h6">{loginName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RepositoryDetail username={loginName} enabled={Boolean(expanded)} />
      </AccordionDetails>
    </Accordion>
  );
};

export default RepoAccordion;

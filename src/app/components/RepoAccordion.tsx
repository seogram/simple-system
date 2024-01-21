import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
        <Typography data-test-id="loginName">{loginName}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <RepositoryDetail username={loginName} enabled={Boolean(expanded)} />
      </AccordionDetails>
    </Accordion>
  );
};

export default RepoAccordion;

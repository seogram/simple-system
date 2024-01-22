import React, { useState } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RepositoryDetail from "./RepositoryDetail";

type Props = { data: { id: number; login: string }[] };

const RepoAccordion = ({ data }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      {data?.map(({ id, login }) => (
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
            <Typography data-test-id="loginName">{login}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RepositoryDetail username={login} enabled={Boolean(expanded)} />
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default RepoAccordion;

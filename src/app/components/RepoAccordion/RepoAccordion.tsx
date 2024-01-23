import React, { useState, useCallback } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RepositoryDetail from "../RepositoryDetail/RepositoryDetail";

type Props = {
  data: Array<{ id: string; login: string }>;
};

const RepoAccordion: React.FC<Props> = ({ data }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = useCallback((panel: string) => {
    setExpanded((prevExpanded) => (prevExpanded !== panel ? panel : false));
  }, []);

  return (
    <Box>
      {data?.map(({ id, login }) => (
        <Accordion
          data-testid={id}
          key={id}
          expanded={expanded === String(id)}
          onChange={() => handleChange(String(id))}
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

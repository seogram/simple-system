import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";


const Error = () => {
  const theme = useTheme();
  return (
    <Typography sx={{ color: theme.palette.error.main }}>
    Something went wrong...
  </Typography>
  );
}

export default Error;

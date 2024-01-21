import React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

type Props = {
  children?: React.ReactNode;
};

const RootStyle = styled(Paper)(({ theme }) => ({
  height: "100vh",
  padding: "1rem",
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  borderRadius: 0,
}));

const Wrapper = ({ children }: Props) => <RootStyle>{children}</RootStyle>;

export default Wrapper;

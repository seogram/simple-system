import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useUserData } from "../../hooks";
import RepoAccordion from "../RepoAccordion/RepoAccordion";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const RootStyle = styled(Stack)(() => ({
  gap: "20px",
}));

type Props = {
  searchTerm?: string;
};

type Data = { id: string; login: string; repos_url: string };
type UserData = Data[];

type UseUserDataReturn = {
  data: UserData;
  isFetching: boolean;
  isError: boolean;
};

const ResultCard: React.FC<Props> = ({ searchTerm }) => {

  const {
    data: githubUserData,
    isFetching: isUserFetching,
    isError,
  }: UseUserDataReturn = useUserData(searchTerm);

  if (isError) {
    return <Error />;
  }

  if (isUserFetching) {
    return <Loading />;
  }

  return (
    <RootStyle>
      {searchTerm && (
        <Box>
          <Typography data-test-id="result">
            {`Showing users for  ${searchTerm} :`}
          </Typography>
        </Box>
      )}
      <Box>
        <RepoAccordion data={githubUserData} />
      </Box>
    </RootStyle>
  );
};

export default ResultCard;

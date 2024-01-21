import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useUserData } from "../hooks";
import RepoAccordion from "./RepoAccordion";
import Error from "./Error";
import Loading from "./Loading";

type Props = {
  searchTerm?: string;
};

type userData = [{ id: number; login: string; repos_url: string }];

const RootStyle = styled(Stack)(() => ({
  gap: "20px",
}));

const ResultCard = ({ searchTerm }: Props) => {
  const {
    data: githubUserData,
    isFetching: isUserFetching,
    isError ,
  }: {
    data: userData;
    isFetching: boolean;
    isError : boolean;
  } = useUserData(searchTerm);

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
        {githubUserData?.map(({ id, login }) => (
          <RepoAccordion key={id} id={id} loginName={login} />
        ))}
      </Box>
    </RootStyle>
  );
};

export default ResultCard;

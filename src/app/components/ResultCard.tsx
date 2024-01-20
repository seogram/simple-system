import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useUserData } from "../hooks";
import RepoAccordion from "./RepoAccordion";
import { useTheme } from "@mui/material/styles";

type Props = {
  searchTerm?: string;
};

type userData = [{ id: number; login: string; repos_url: string }];

const ResultCard = ({ searchTerm }: Props) => {
  const theme = useTheme();

  const {
    data: githubUserData,
    error: userFetchError,
    isFetching: isUserFetching,
  }: { data: userData; error: any; isFetching: boolean } = useUserData(
    searchTerm
  );

  if (userFetchError) {
    return (  //TODO : extract o its own component Error component
      <Typography sx={{ color: theme.palette.error.main }}>
        Something went wrong...
      </Typography>
    );
  }

  if (isUserFetching) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ py: 2 }}>
      <Stack sx={{ pb: 3 }}>
        <Typography>{`Showing users for  ${searchTerm}`} </Typography>
      </Stack>
      <Stack>
        {githubUserData?.map(({ id, login }) => {
          return <RepoAccordion id={id} loginName={login} />;
        })}
      </Stack>
    </Box>
  );
};

export default ResultCard;

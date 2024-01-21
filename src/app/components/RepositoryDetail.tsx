import { Box, Stack, Typography } from "@mui/material";
import { useUserRepo } from "../hooks";
import StarIcon from "@mui/icons-material/Star";
import Error from "./Error";
import Loading from "./Loading";
import { styled } from "@mui/material/styles";

type Props = {
  enabled: boolean;
  username?: string;
};

type userData = [
  { id: number; name: string; description: string; stargazers_count: string },
];

const RootStyle = styled(Box)(() => ({
  padding: "0.5rem",
  maxHeight: "260px",
  overflow: "auto",
}));

const WrapperStyle = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  padding: "10px",
  marginBottom: "10px",
}));
const RightBoxStyle = styled(Box)(() => ({
  display: "flex",
}));

const RepositoryDetail = ({ username, enabled }: Props) => {
  const {
    data: githubUserRepo,
    isFetching: isUserRepoFetching,
    isError,
  }: { data: userData; isError: boolean; isFetching: boolean } = useUserRepo({
    username,
    enabled,
  });

  if (isError) {
    return <Error />;
  }

  if (isUserRepoFetching) {
    return <Loading />;
  }

  return (
    <RootStyle>
      {githubUserRepo?.map(({ id, name, description, stargazers_count }) => (
        <WrapperStyle key={id}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" data-test-id="repoName">
              {name}
            </Typography>
            <RightBoxStyle alignItems="center">
              <Typography variant="body2" data-test-id="repoStars">
                {stargazers_count}
              </Typography>
              <StarIcon fontSize="small" />
            </RightBoxStyle>
          </Stack>
          <Stack data-test-id="repoDescription">{description}</Stack>
        </WrapperStyle>
      ))}
    </RootStyle>
  );
};

export default RepositoryDetail;

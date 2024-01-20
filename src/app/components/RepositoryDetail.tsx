import { Box, Stack, Typography } from "@mui/material";
import { useUserRepo } from "../hooks";
import { useTheme } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";

type Props = {
  enabled: boolean;
  username?: string;
};

type userData = [{ id: number; name: string; stargazers_count: string }];

const RepositoryDetail = ({ username, enabled }: Props) => {
  const theme = useTheme();

  const {
    data: githubUserRepo,
    error: userRepoFetchError,
    isFetching: isUserRepoFetching,
  }: { data: userData; error: any; isFetching: boolean } = useUserRepo({
    username,
    enabled,
  });

  if (userRepoFetchError) {
    return (
      //TODO : extract o its own component Error component
      <Typography sx={{ color: theme.palette.error.main }}>
        Something went wrong...
      </Typography>
    );
  }

  if (isUserRepoFetching) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box sx={{ px: 4, maxHeight: "300px", overflow: "auto" }}>
      {githubUserRepo?.map(({ id, name, stargazers_count }) => (
          <Box key={id}>
            <Stack
              sx={{ pb: 3 }}
              direction="row"
              justifyContent="space-between"
            >
              <Typography>{name} </Typography>
              <Box sx={{ display: "flex" }} alignItems="center">
                <Typography variant="body2">{stargazers_count} </Typography>
                <StarIcon fontSize="small" />
              </Box>
            </Stack>
          </Box>
        ))}
    </Box>
  );
};

export default RepositoryDetail;

import { Box, Button, Stack, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

const RootStyle = styled(Box)(() => ({
  paddingTop: "20px",
  paddingBottom: "20px",
}));

const InputStyle = styled(InputBase)(({ theme }) => ({
  width: "80%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  paddingLeft: "10px",
  paddingRight: "10px",
  marginBottom: "20px",
  border: "1px solid",
}));

const ButtonStyle = styled(Button)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SearchBox = () => {
  const router = useRouter();

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      username: "",
    },
  });

  const username = watch("username");

  const handleSearch = () => {
    router.replace(`/?user=${username}`);
    reset();
  };

  return (
    <RootStyle>
      <Stack alignItems="center">
        <Controller
          name="username"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputStyle
              {...field}
              placeholder="Username..."
              fullWidth
              error={Boolean(error)}
            />
          )}
        />
        <ButtonStyle
          data-testid="searchButton"
          disabled={!isDirty}
          variant="contained"
          onClick={handleSubmit(handleSearch)}
          name="search"
        >
          Search
        </ButtonStyle>
      </Stack>
    </RootStyle>
  );
};

export default SearchBox;

import { Box, Button, Stack, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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

const FormSchema = Yup.object().shape({
  username: Yup.string().required("userne is required"),
});

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
    resolver: yupResolver(FormSchema),
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
            <InputStyle {...field} fullWidth error={Boolean(error)} />
          )}
        />
        <ButtonStyle
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

import React, { useState } from "react";
import { Box, Button, Stack, InputBase, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    router.replace(`/?user=${searchTerm}`);
    console.log(searchTerm);
    setSearchTerm("");
  };

  return (
    <Box sx={{ py: 2 }}>
      <Stack>
        <InputBase
          sx={{ px: 1, mb: 2, border: "1px solid" }}
          placeholder="Enter username"
          inputProps={{ "aria-label": "search github users" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default SearchBar;

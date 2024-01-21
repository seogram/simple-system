import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SearchBox from "./SearchBox";
import ResultCard from "./ResultCard";
import Wrapper from "./Wrapper";

const Container = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string | undefined>();

  const query = searchParams.get("user");
  useEffect(() => {
    if (query) {
      setSearchTerm(query);
    }
  }, [query]);

return (
    <Wrapper>
    <SearchBox />
    <ResultCard searchTerm={searchTerm} />
  </Wrapper>
)
};

export default Container;

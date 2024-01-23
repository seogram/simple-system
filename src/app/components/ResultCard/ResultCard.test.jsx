import React from "react";
import {  render } from "@testing-library/react";
import ResultCard from "./ResultCard";
import { useUserData } from "../../hooks/useUserData";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../../hooks/useUserData");

const mockUserData = useUserData;

describe("ResultCard Component", () => {
  let queryClient, searchTerm;
  beforeEach(() => {
    queryClient = new QueryClient();
    searchTerm = "testUser";
  });

  test("should render 'Loading...' text when in loading state", async () => {
    mockUserData.mockReturnValue({
      githubUserRepo: undefined,
      isFetching: true,
      isError: false,
    });

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <ResultCard searchTerm={searchTerm} />
      </QueryClientProvider>
    );

    expect(getByText("Loading...")).toBeInTheDocument();
  });

  test("should render 'Something went wrong...' text when in error state", async () => {
    mockUserData.mockReturnValue({
      githubUserRepo: undefined,
      isFetching: false,
      isError: true,
    });

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <ResultCard searchTerm={searchTerm} />
      </QueryClientProvider>
    );

    expect(getByText("Something went wrong...")).toBeInTheDocument();
  });

  test("Should render ResultCard component with searchTerm", async () => {
    mockUserData.mockReturnValue({
      githubUserRepo: [{ id: 1, login: "test", repos_url: "/test" }],
      isFetching: false,
      isError: false,
    });

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <ResultCard searchTerm={searchTerm} />
      </QueryClientProvider>
    );

    expect(getByText("Showing users for testUser :")).toBeInTheDocument();
  });
});

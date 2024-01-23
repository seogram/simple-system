import React from "react";
import { useSearchParams } from "next/navigation";
import { render } from "@testing-library/react";
import Container from "./Container";
import { useUserData, useUserRepo } from "../../hooks/useUserData";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../../hooks/useUserData");

const mockUserRepoData = useUserRepo;

jest.mock("../../hooks/useUserData");

const mockUserData = useUserData;

jest.mock("next/navigation", () => {
  return {
    useRouter: jest.fn(),
    useSearchParams: jest.fn(),
  };
});

describe("Container Component ", () => {
  let queryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
  });

  test("should render without crashing when there is no searchTerm", async () => {
    useSearchParams.mockReturnValue({ get: jest.fn() });

    mockUserRepoData.mockReturnValue({
      data: undefined,
      isFetching: false,
      isError: false,
    });

    mockUserData.mockReturnValue({
      githubUserRepo: undefined,
      isFetching: false,
      isError: false,
    });

    const container = render(
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    );

    expect(container).toMatchSnapshot();
  });

  test("should render without crashing when there is a query param : user=", async () => {
    useSearchParams.mockReturnValue({ get: () => "testUser" });

    mockUserRepoData.mockReturnValue({
      data: undefined,
      isFetching: false,
      isError: false,
    });

    mockUserData.mockReturnValue({
      githubUserRepo: undefined,
      isFetching: true,
      isError: false,
    });

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    );

    const loadingText = getByText("Loading...");
    expect(loadingText).toBeInTheDocument();
  });

  test("should render correctly when data is fetched", async () => {
    useSearchParams.mockReturnValue({ get: () => "testUser" });

    mockUserRepoData.mockReturnValue({
      data: undefined,
      isFetching: false,
      isError: false,
    });

    mockUserData.mockReturnValue({
      githubUserRepo: [{ id: 1, login: "test", repos_url: "/test" }],
      isFetching: false,
      isError: false,
    });

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Container />
      </QueryClientProvider>
    );

    expect(getByText("Showing users for testUser :")).toBeInTheDocument();
  });
});

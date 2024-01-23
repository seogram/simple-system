import React from "react";
import { render } from "@testing-library/react";
import RepositoryDetail from "./RepositoryDetail";
import { useUserRepo } from "../../hooks/useUserData";
import { QueryClient, QueryClientProvider } from "react-query";

jest.mock("../../hooks/useUserData");

const mockUserRepoData = useUserRepo;

describe("RepositoryDetail Component", () => {
  let queryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
  });

  test("should render 'Loading...' text when in loading state", async () => {
    mockUserRepoData.mockReturnValue({
      data: undefined,
      isFetching: true,
      isError: false,
    });

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <RepositoryDetail username="testUser" enabled={false} />
      </QueryClientProvider>
    );

    expect(getByText("Loading...")).toBeInTheDocument();
  });

  test("should render 'Something went wrong...' text when in error state", async () => {
    mockUserRepoData.mockReturnValue({
      data: undefined,
      isFetching: false,
      isError: true,
    });

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <RepositoryDetail username="testUser" enabled={false} />
      </QueryClientProvider>
    );

    expect(getByText("Something went wrong...")).toBeInTheDocument();
  });

  test("Should render RepositoryDetail component with userName", async () => {
    mockUserRepoData.mockReturnValue({
      data: [
        {
          id: 1,
          name: "testRepo",
          description: "sample description",
          stargazers_count: 2,
        },
      ],
      isFetching: false,
      isError: false,
    });

    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <RepositoryDetail username="testUser" enabled={false} />
      </QueryClientProvider>
    );

    expect(getByText("testRepo")).toBeInTheDocument();
    expect(getByText("sample description")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });
});

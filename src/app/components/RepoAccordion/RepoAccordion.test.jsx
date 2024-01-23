import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RepoAccordion from "./RepoAccordion";
import { QueryClient, QueryClientProvider } from "react-query";
import { useUserRepo } from "../../hooks/useUserData";

jest.mock("../../hooks/useUserData");

const mockUserRepoData = useUserRepo;

describe("RepoAccordion Component", () => {
  let queryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
  });

  test("should render only Accordions titles when there is no click on them", async () => {
    mockUserRepoData.mockReturnValue({
      data: undefined,
      isFetching: false,
      isError: false,
    });
    const { getByText, queryByText } = render(
      <QueryClientProvider client={queryClient}>
        <RepoAccordion
          data={[{ id: 1, login: "user1", id: 2, login: "user2" }]}
        />
      </QueryClientProvider>
    );

    expect(getByText("user2")).toBeInTheDocument();
    expect(queryByText("testRepo")).toBeNull();
    expect(queryByText("sample description")).toBeNull();
    expect(queryByText("2")).toBeNull();
  });

  test("should render Accordions correctly", async () => {
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
    const { getByText, getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <RepoAccordion
          data={[{ id: 1, login: "user1", id: 2, login: "user2" }]}
        />
      </QueryClientProvider>
    );
    const accordionControlButton = getByTestId(2);
    fireEvent.click(accordionControlButton);

    expect(getByText("user2")).toBeInTheDocument();
    expect(getByText("testRepo")).toBeInTheDocument();
    expect(getByText("sample description")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
  });
});

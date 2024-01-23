import { render, fireEvent, waitFor, act } from "@testing-library/react";
import SearchBox from "./SearchBox";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => {
  return {
    useRouter: jest.fn(),
  };
});

describe("SearchBox Component", () => {
  useRouter.mockReturnValue({ replace: jest.fn() });

  it("Search button should be dsiabled when the field is empty", async () => {
    const { getByText } = render(<SearchBox />);

    const buttonElement = getByText("Search");
    expect(buttonElement).toBeDisabled();
  });

  it("updates the URL with the entered search string on form submission", async () => {
    const router = useRouter();
    const { getByPlaceholderText, getByText } = render(<SearchBox />);

    const inputElement = getByPlaceholderText("Username... (without space)");
    const buttonElement = getByText("Search");

    act(() => {
      fireEvent.change(inputElement, { target: { value: "JohnDoe" } });
    });

    expect(buttonElement).not.toBeDisabled();

    act(() => {
      fireEvent.click(buttonElement);
    });

    await waitFor(() => {
      expect(router.replace).toHaveBeenCalled();
      expect(router.replace).toHaveBeenCalledWith("/?user=JohnDoe");
    });
  });
});

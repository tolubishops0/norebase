import { render, screen } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import App from "./App";
import { toast } from "sonner";
import Pagination from "./pagination/Pagination";


jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

jest.mock("./providers/Actions", () => ({
  getTicketAction: jest.fn(),
}));

jest.mock("sonner", () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe("App Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing and shows skeleton rows", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: { tickets: Array(10).fill({}) },
      error: null,
    });

    render(<App />);
    const skeletonRows = screen.getAllByTestId("skeleton-row");
    expect(skeletonRows.length).toBe(10);
  });

  test("displays error message on error", () => {
    const errorMessage = "An error occurred";
    (useQuery as jest.Mock).mockReturnValue({
      data: null,
      error: new Error(errorMessage),
    });

    render(<App />);

    expect(toast.error).toHaveBeenCalledWith(errorMessage);
  });

  test("hides Prev button when page is 1", () => {
    render(<Pagination page={1} handleNext={() => {}} handlePrev={() => {}} />);
    expect(screen.queryByText("← Prev")).toBeNull();
  });
});

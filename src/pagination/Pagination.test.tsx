import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  test("renders Next and Prev buttons correctly", () => {
    render(<Pagination page={2} handleNext={() => {}} handlePrev={() => {}} />);
    expect(screen.getByText("Next →")).toBeInTheDocument();
    expect(screen.getByText("← Prev")).toBeInTheDocument();
  });

  test("calls handleNext on clicking Next button", () => {
    const handleNext = jest.fn();
    render(
      <Pagination page={2} handleNext={handleNext} handlePrev={() => {}} />
    );

    fireEvent.click(screen.getByText("Next →"));
    expect(handleNext).toHaveBeenCalled();
  });

  test("hides Prev button when page is 1", () => {
    render(<Pagination page={1} handleNext={() => {}} handlePrev={() => {}} />);
    expect(screen.queryByText("← Prev")).toBeNull();
  });
});

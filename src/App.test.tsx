import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders report data with report titles", async () => {
  const { getByTestId } = render(<App />);
  const containerElem = await waitFor(() => getByTestId("container"));
  expect(containerElem).toBeInTheDocument();

  expect(getByTestId("report-title-0")).toBeInTheDocument();
  expect(getByTestId("report-title-0")).toContainHTML("Balance Sheet");

  expect(getByTestId("report-title-1")).toBeInTheDocument();
  expect(getByTestId("report-title-1")).toContainHTML("Demo Org");

  expect(getByTestId("report-title-2")).toBeInTheDocument();
  expect(getByTestId("report-title-2")).toContainHTML("As at 12 June 2024");
});

import React from "react";
import { render } from "@testing-library/react";
import Count from "./Count.jsx";

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Count />, div);
});

test("renders correct count", () => {
  const count = 2;
  const { getByText } = render(<Count count = { count } />);
  expect(getByText(`Trivia Question: ${count} of 10`)).toBeInTheDocument();
});

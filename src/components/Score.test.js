import React from "react";
import { render } from "@testing-library/react";
import Score from "./Score.jsx";

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Score />, div);
});

test("renders correct score message when game is finished", () => {
  const score = 2;
  const { getByText } = render(<Score score={ score } />);
  expect(getByText(`You scored ${ score } out of 10`)).toBeInTheDocument();
});


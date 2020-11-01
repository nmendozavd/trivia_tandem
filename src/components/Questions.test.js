import React from "react";
import { render } from "@testing-library/react";
import Questions from "./Questions.jsx";

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Questions />, div);
});



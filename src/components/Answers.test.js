import React from "react";
import { render } from "@testing-library/react";
import Answers from "./Answers.jsx";

test("renders without crashing", () => {
  let currentQuestion = 0;
  let triviaData = [ 
    {
      "question": "What was Tandem previous name?",
      "answers": ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"],
      "correct": "Devmynd"
    }
  ]
  const div = document.createElement("div");
  render(<Answers currentQuestion = { currentQuestion } triviaData = { triviaData }/>, div);
});

test("renders answers component with answers", () => {
  let currentQuestion = 0;
  let triviaData = [ 
    {
      "question": "What was Tandem previous name?",
      "answers": ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"],
      "correct": "Devmynd"
    }
  ]
  const { getByText } = render(<Answers currentQuestion = { currentQuestion } triviaData = { triviaData }/>);
  expect(getByText("Tandem")).toBeInTheDocument();
  expect(getByText("Burger Shack")).toBeInTheDocument();
  expect(getByText("Extraordinary Humans")).toBeInTheDocument();
  expect(getByText("Devmynd")).toBeInTheDocument();
});


import React from "react";
import { render } from "@testing-library/react";
import Questions from "./Questions.jsx";

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
  render(<Questions currentQuestion = { currentQuestion } triviaData = { triviaData }/>, div);
});

test("renders correct questions", () => {
  let currentQuestion = 0;
  let triviaData = [ 
    {
      "question": "What was Tandem previous name?",
      "answers": ["Tandem", "Burger Shack", "Extraordinary Humans", "Devmynd"],
      "correct": "Devmynd"
    }
  ]
  const { getByText } = render(<Questions currentQuestion = { currentQuestion } triviaData = { triviaData }/>);
  expect(getByText("What was Tandem previous name?")).toBeInTheDocument();
});



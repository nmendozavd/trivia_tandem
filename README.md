# 2020 Tandem Apprentice Software Engineer Code Challenge

## Assumptions
- [x] A round of trivia has 10 Questions
- [x] All questions are multiple-choice questions
- [x] Your score does not need to update in real time
- [x] Results can update on form submit, button click, or any interaction you choose
- [x] We will provide you with the trivia data such as the questions, correct and incorrect answers via a
JSON file.

## Acceptance Criteria

- [x] A user can view questions.
- [x] Questions with their multiple choice options must be displayed one at a time.
- [x] Questions should not repeat in a round.
- [x] A user can select only 1 answer out of the 4 possible answers.
- [x] The correct answer must be revealed after a user has submitted their answer
- [x] A user can see the score they received at the end of the round

## My Approach

* I utilized `create-react-app` to implement my Trivia app
* In order to meet acceptance criteria:
    * I implemented a shuffle function to randmonly select and not repeat questions in a round
    * I implemented an alert box to display the correct answer and utilized a check answer function to update score
    * If user selects correct answer, next question is presented
    * User only sees final score when a round is complete

## Testing

* A total of 9 tests with 5 suites were made using `JEST`
* Every component has a corresponding test file (`App.jsx/App.test.jsx`)
* You can run `npm test` to run the suite of tests

## Additional Considerations

If I had additiona time I would:
* Implement further tests on individual functions that update state (`shuffleQuestions()`, `answerButton()`, `checkAnswer()`)
* Implement reset button after a round is complete
* Implement a modal pop-up to display correct answer

## How to Run Code

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


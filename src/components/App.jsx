import React from 'react';
import { triviaData } from '../data/data.js';
import Score from './Score.jsx'
import Questions from './Questions.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentQuestion: 0,
      showScore: false,
      currentNum: [],
      score: 0,
      count: 0,
      correct: ''
    };
    this.answerButton = this.answerButton.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  // mount shuffleQuestions method to populate first question
  componentDidMount() {
    this.shuffleQuestions();
  }
  // method to create randomize questions for user 
  shuffleQuestions() {
    // array of options in relation to questions in data
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    let i = array.length;
    let j = 0;
    let temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    // get last random number from array
    let current = array.pop();
    // set first question/answer in state, and add randomize array to state
    this.setState( {
      currentQuestion: current,
      correct: triviaData[current].correct,
      currentNum: array
    })
  }
  // answer button 
  answerButton(e) {
    // get num of array in state created by shuffleQuestions
    let index = this.state.currentNum.pop();
    // check to make sure user has answered less than 10 questions
    if(this.state.count < 9) {
      // if so, update state to next question, correct answer, and update count
      this.setState({
        currentQuestion: index,
        count: this.state.count + 1,
        correct: triviaData[index].correct
      })
    // otherwise, game is done, display score div to user
    } else {
      this.setState({
        showScore: true
      })
    }
    // call method to check if answer selected is correct
    this.checkAnswer(e)
  }
  // check if answer is correct
  checkAnswer(e) {
    // get answer selected by attribute
    let answer = e.target.attributes.getNamedItem('answer-id').value;
    // check if answer is correct 
    if(answer === this.state.correct) {
      // if so, update score by 1 point
      this.setState( {
        score: this.state.score + 1,
      })
    } else {
      // display correct answer to user
      alert('Opps! The correct answer was ' + this.state.correct)
    }
  }

  render() { 
    return (
      <div className='app'> 
        { this.state.showScore ? (
          <Score results = { this.state.score } />
        ): (
          <div>
            <Questions question = { this.state.currentQuestion } triviaData = { triviaData }/>
            <div className='answer-section'>
              { triviaData[this.state.currentQuestion].answers.map((options, index) => (
                <button onClick={this.answerButton} answer-id = { options }> { options }</button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
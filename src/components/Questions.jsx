import React from 'react';

const Questions = ({ currentQuestion, triviaData, count }) => (
  <div className='question-section'>
    <img src="tandem.png" alt="tandem logo"/>
    <div className='count-section'> Trivia Question: {count} of 10 </div>
    <div> {triviaData[currentQuestion].question} </div>
  </div>
);

export default Questions;
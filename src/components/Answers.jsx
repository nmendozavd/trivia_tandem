import React from 'react';

const Answers = ({triviaData, currentQuestion, answerButton }) => (
  <div className='answer-section'>
    { triviaData[currentQuestion].answers.map((options, index) => (
      <button onClick={ answerButton } answer-id={options}> { options}</button>
    ))}
  </div>
);

export default Answers;
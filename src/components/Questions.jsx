import React from 'react';

const Questions = ({ currentQuestion, triviaData }) => (
  <div className='question-section'>
    {triviaData[currentQuestion].question}
  </div>
);

export default Questions;
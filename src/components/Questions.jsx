import React from 'react';

const Questions = ({ question, triviaData }) => (
  <div className='question-section'>
    <img src="tandem.png" />
    { triviaData[question].question }
  </div>
);

export default Questions;
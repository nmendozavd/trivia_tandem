import React from 'react';

const Count = ({ count }) => (
  <div className='question-section'>
    <img src="tandem.png" alt="tandem logo" />
    <div className='count-section'> Trivia Question: { count } of 10 </div>
  </div>
);

export default Count;
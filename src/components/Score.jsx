import React from 'react';

const Score = ({ score }) => (
  <div className='score-section'>
    <span>You scored { score } out of 10</span>
  </div>
);

export default Score;
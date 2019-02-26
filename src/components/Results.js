import React from 'react';
import '../styles/Results.scss';

const Results = ({ searchField }) => {
  return (
    <p className='result'>{searchField}</p>
  )
};

export default Results;
import React from 'react';
import '../styles/Results.css';

const Results = ({ searchField }) => {
  return (
    <p className='result'>{searchField}</p>
  )
};

export default Results;

import React from 'react';
// import { useLocation } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
// import "./App.css";

const ResultPage = (props) => {

  return (
    <div className='search-render'>
      {props.dataState ?(
        <ExerciseList exercise={props.dataState} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultPage;




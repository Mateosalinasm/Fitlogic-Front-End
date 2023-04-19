import React from 'react';
import { useHistory } from 'react-router-dom';
import ResultPage from '../pages/ResultPage';

function WorkoutResult() {
  const history = useHistory();

  function handleClick() {
    // Navigate to the ResultPage component and pass the results as a prop
    history.push('/workout', { results });
  }

  return (
    <div>
      <button onClick={handleClick}>Show results</button>
    </div>
  );
}

export default WorkoutResult;

import React from 'react';

const SearchResult = (props) => {
    console.log(props)
    const exercise = props.exercise[0]
    console.log(exercise)
  return (
    <div>
      <h2>{exercise.Name}</h2>
      <p><strong>Type: </strong>{exercise.Type}</p>
      <p><strong>Primary Muscles: </strong>{exercise['Primary Muscles'].join(', ')}</p>
      <p><strong>Secondary Muscles: </strong>{exercise.SecondaryMuscles.join(', ')}</p>
      <p><strong>Force: </strong>{exercise.Force}</p>
      <p><strong>Workout Type: </strong>{exercise['Workout Type'].join(', ')}</p>
      <p><strong>Youtube Link: </strong><a href={exercise['Youtube link']}>{exercise['Youtube link']}</a></p>
    </div>
  );
};

export default SearchResult;

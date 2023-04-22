// import React from 'react';

// const SearchResult = (props) => {
//     console.log(props)
//     const exercise = props.exercise[0]
//     console.log(exercise)
//   return (
//     <div>
//       <h2>{exercise.Name}</h2>
//       <p><strong>Type: </strong>{exercise.Type}</p>
//       <p><strong>Primary Muscles: </strong>{exercise['Primary Muscles'].join(', ')}</p>
//       <p><strong>Secondary Muscles: </strong>{exercise.SecondaryMuscles.join(', ')}</p>
//       <p><strong>Force: </strong>{exercise.Force}</p>
//       <p><strong>Workout Type: </strong>{exercise['Workout Type'].join(', ')}</p>
//       <p><strong>Youtube Link: </strong><a href={exercise['Youtube link']}>{exercise['Youtube link']}</a></p>
//     </div>
//   );
// };



// import React from 'react';

// const SearchResult = (props) => {
//     console.log(props)
//     const exercise = props.exercise[0]
//     console.log(exercise)
//   return (
//     <div>
//       <h2>{exercise.Name}</h2>
//       <p><strong>Type: </strong>{exercise.Type}</p>
//       <p><strong>Primary Muscles: </strong>{exercise['Primary Muscles'].join(', ')}</p>
//       <p><strong>Secondary Muscles: </strong>{exercise.SecondaryMuscles.join(', ')}</p>
//       <p><strong>Force: </strong>{exercise.Force}</p>
//       <p><strong>Workout Type: </strong>{exercise['Workout Type'].join(', ')}</p>
//       <p><strong>Youtube Link: </strong><a href={exercise['Youtube link']}>{exercise['Youtube link']}</a></p>
//       <div>
//        <iframe width="560" height="315" src={exercise['Youtube link']} title={exercise.Name}></iframe>
//       </div>

//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';

const SearchResult = (props) => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    // Retrieve video ID from YouTube URL
    const videoUrl = props.exercise[0]['Youtube link'];
    const videoId = videoUrl.substring(videoUrl.indexOf('v=') + 2);
    setVideoId(videoId);
  }, [props.exercise]);

  return (
    <div>
      <h2>{props.exercise[0].Name}</h2>
      <p><strong>Type: </strong>{props.exercise[0].Type}</p>
      <p><strong>Primary Muscles: </strong>{props.exercise[0]['Primary Muscles'].join(', ')}</p>
      <p><strong>Secondary Muscles: </strong>{props.exercise[0].SecondaryMuscles.join(', ')}</p>
      <p><strong>Force: </strong>{props.exercise[0].Force}</p>
      <p><strong>Workout Type: </strong>{props.exercise[0]['Workout Type'].join(', ')}</p>
      <div>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={props.exercise[0].Name}
        ></iframe>
      </div>
    </div>
  );
};


export default SearchResult;

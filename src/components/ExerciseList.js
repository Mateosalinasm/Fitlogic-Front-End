
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
          src={`https://www.youtube.com/embed/${videoId}`} //Should render, but after research there is an API error with the playback
          title={props.exercise[0].Name}
        ></iframe>
      </div>
    </div>
  );
};


export default SearchResult;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import ExerciseList from '../components/ExerciseList';

// const ResultPage = () => {
//   const location = useLocation();
//   const searchResults = location.state;

//   return (
//     <div>
//       <h1>Search Results</h1>
//       {searchResults ? (
//         <ExerciseList exercises={searchResults} />
//       ) : (
//         <p>No results found.</p>
//       )}
//     </div>
//   );
// };

// export default ResultPage;


import React from 'react';
import { useLocation } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';

const ResultPage = (props) => {
//   const location = useLocation();
//   // const searchResults = location.state.data || [];
//   function SearchResult(props) {
//     const { results } = props;
//     return (
//       <div>
//         {results.map((result) => (
//           <div key={result.id}>
//             <p>{result.Name?.First}</p>
//             <p>{result.Name?.Last}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }  

  return (
    <div>
      {props.dataState ?(
        <ExerciseList exercise={props.dataState} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default ResultPage;




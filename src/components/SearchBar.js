// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const API = process.env.REACT_APP_API;
// function SearchBar(props) {
//   console.log(props)
//   const [searchQuery, setSearchQuery] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     const options = {
//       method: "GET",
//       url: "https://exerciseapi3.p.rapidapi.com/search/",
//       params: { name: searchQuery },
//       headers: {
//         "X-RapidAPI-Key": `${API}`,
//         "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
//       },
//     };
  
//     fetch(`https://exerciseapi3.p.rapidapi.com/search/?name=${searchQuery}`, options)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         props.handleData(data)
//         // navigate('/results'); // pass searchResults as state
//         // navigate('/results', { state: {data} }); // pass searchResults as state
// // 
//       })
//       .catch(error => {
//         console.error(error);
//         setError(error.message);
//       });
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//     handleSearch();
//     }
// };
  

//   return (
//     <div>
//     <input
//         type="text"
//         value={searchQuery}
//         onChange={(event) => setSearchQuery(event.target.value)}
//         onKeyDown={handleKeyDown} // Added this event handler
//         placeholder="Search"
//       />
//       {/* <button onClick={handleSearch}>Search</button>
//       {error && <p>{error}</p>} */}
//     </div>
// );
// }

// export default SearchBar;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API;

function SearchBar(props) {
  console.log(props);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    const options = {
      method: "GET",
      url: "https://exerciseapi3.p.rapidapi.com/search/",
      params: { name: searchQuery },
      headers: {
        "X-RapidAPI-Key": `${API}`,
        "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
      },
    };

    fetch(`https://exerciseapi3.p.rapidapi.com/search/?name=${searchQuery}`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length === 0) {
          setNotFound(true);
        } else {
          setNotFound(false);
          props.handleData(data);
          navigate("/results"); // pass searchResults as state
          // navigate('/results', { state: {data} }); // pass searchResults as state
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search"
      />
      {notFound && <p>Result not found.</p>}
      {/* <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>} */}
    </div>
  );
}

export default SearchBar;

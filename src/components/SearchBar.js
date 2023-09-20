import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API;
console.log(API) // GET RIN

function SearchBar(props) {
  console.log(props);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("Entering API")
    const url = `https://exerciseapi3.p.rapidapi.com/exercise/name/${searchQuery}`;
    const headers = {
      "X-RapidAPI-Key": `${API}`,
      "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
    };
        
    const options = {
      method: "GET",
      headers: headers,
    };

    console.log('Should have gone through API...')
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length === 0) {
          setNotFound(true);
        } else {
          setNotFound(false);
          props.handleData(data);
          navigate("/results");
          console.log('Nothing found')
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

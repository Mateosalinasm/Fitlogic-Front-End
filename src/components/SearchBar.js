import React, { useState } from "react";
import API from "../secret";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const options = {
      method: "GET",
      url: "https://exerciseapi3.p.rapidapi.com/search/",
      params: { name: `${searchQuery}` },
      headers: {
        "X-RapidAPI-Key": `${API}`,
        "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
      },
    };
  
    fetch(`https://exerciseapi3.p.rapidapi.com/search/?name=${searchQuery}`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        navigate('/results', { state: { searchResults: data.results } }); // pass searchResults as state
      })
      .catch(error => {
        console.error(error);
        setError(error.message);
      });
  };
  

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter your search query"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default SearchBar;

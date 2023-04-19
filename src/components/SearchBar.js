import React, { useState } from "react";
import test from "../secret";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
    fetch(`https://exerciseapi3.p.rapidapi.com/search/?name=${searchQuery}`, options)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data returned by the API
        setSearchResults(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  function capitalizeFirstLetter(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  const options = {
    method: 'GET',
    url: 'https://exerciseapi3.p.rapidapi.com/search/',
    params: {name: `${searchQuery}`},
    headers: {
      'X-RapidAPI-Key': `API`, // Replace with actual API
      'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
    }
  };
  

  
  const name = options.params.name;

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Enter your search query"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {searchResults && searchResults.map(result => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}



export default SearchBar;

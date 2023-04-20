import React, { useState } from "react";
import API from "../secret";

function SearchBar() {
const [searchQuery, setSearchQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [error, setError] = useState("");

const handleSearch = async () => {
    try {
    const response = await fetch(
        `https://exerciseapi3.p.rapidapi.com/search/?name=${searchQuery}`,
        options
    );
    const data = await response.json();
    console.log(data); // Log the data returned by the API
    setSearchResults(data.results);
    } catch (error) {
    console.error(error);
    setError("An error occurred while searching. Please try again later.");
    }
};

const handleKeyDown = (event) => {
    if (event.key === "Enter") {
    handleSearch();
    }
};

const options = {
    method: "GET",
    url: "https://exerciseapi3.p.rapidapi.com/search/",
    params: { name: `${searchQuery}` },
    headers: {
    "X-RapidAPI-Key": `${API}`, // Replace with actual API
    "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
    },
};

return (
    <div>
    <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyDown={handleKeyDown} // Added this event handler
        placeholder="Search"
    />
    {error && <p>{error}</p>}
    {searchResults &&
        searchResults.map((result) => (
        <div key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
        </div>
        ))}
    </div>
);
}

export default SearchBar;
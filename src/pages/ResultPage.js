import { useLocation } from "react-router-dom";


function ResultPage() {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];
  console.log("searchResults:", searchResults);

  return (
    <div>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default ResultPage;



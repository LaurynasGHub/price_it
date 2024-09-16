import React, { useState } from 'react';

import ResultCard from '../ResultCard/ResultCard';

function ResultsWindow({ searchResults }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="default-div rounded p-3 mt-2 default-text">
      {searchResults === 'empty' || !searchResults ? (
        <div className="h-100 d-flex align-items-center justify-content-center">
          {loading ? (
            <div className="loader">...</div>
          ) : (
            <p className="mb-0">No results yet</p>
          )}
        </div>
      ) : Array.isArray(searchResults) && searchResults.length > 0 ? (
        searchResults.map((item) => (
          <ResultCard
            key={`${item.title}${item.price}`}
            title={item.title}
            price={item.price}
          />
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default ResultsWindow;

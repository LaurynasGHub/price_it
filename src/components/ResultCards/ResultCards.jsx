import React from 'react';

// components
import ResultCard from '../ResultCard/ResultCard';

function ResultCards({ searchResults }) {
  return (
    <div>
      {searchResults.map((item) => (
        <ResultCard
          key={`${item.name}${item.price}`}
          title={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default ResultCards;

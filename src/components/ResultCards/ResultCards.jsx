import React from 'react';

// components
import ResultCard from '../ResultCard/ResultCard';

function ResultCards({ searchResults }) {
  return (
    <div className="custom-border rounded p-2 my-3">
      <div className="container-fluid">
        <div className="row">
          <div className="p-2 col-4 col-sm-2 col-md-2">
            <img
              className="image-fluid"
              src="/images/barbora_cover.jpeg"
              alt="barbora-img"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-9 col-sm-10 col-md-10">
            <p className="mb-2">
              <u>Name</u>
            </p>
          </div>
          <div className="col-3 col-sm-2 col-md-2 price-p">
            <p>
              <u>Price</u>
            </p>
          </div>
        </div>
      </div>
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

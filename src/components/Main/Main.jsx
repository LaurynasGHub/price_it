import React from 'react';

// components
import ResultCards from '../ResultCards/ResultCards';
import SearchBar from '../SearchBar/SearchBar';
import MostSearchedItems from '../MostSearchedItems/MostSearchedItems';

function SearchCard() {
  return (
    <div className="default-div custom-border rounded py-2 mx-3 default-text">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 ">
            <SearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <ResultCards />
          </div>
          <div className="col-md-4">
            <MostSearchedItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;

import React from 'react';

// components
import ResultCards from '../ResultCards/ResultCards';
import SearchBar from '../SearchBar/SearchBar';
import MostSearchedItems from '../MostSearchedItems/MostSearchedItems';

function SearchCard() {
  return (
    <div className="default-div custom-border rounded py-2 m-1 default-text">
      <div class="container-fluid">
        <div class="row">
          <div className="col-md-12 ">
            <SearchBar />
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <ResultCards />
          </div>
          <div class="col-md-4">
            <MostSearchedItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;

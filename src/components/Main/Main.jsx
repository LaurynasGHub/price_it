import React from 'react';

// components
import ResultCards from '../ResultCards/ResultCards';
import SearchBar from '../SearchBar/SearchBar';
import MostSearchedItems from '../MostSearchedItems/MostSearchedItems';
import SearchButton from '../SearchButton/SearchButton';

import './main.scss';

function SearchCard() {
  return (
    <div className="default-div rounded py-2 m-3 default-text">
      <div className="container-fluid pb-2">
        <div className="row">
          <div className="col-8 col-sm-10 col-md-10">
            <SearchBar />
          </div>
          <div className="col-4 col-sm-2 col-md-2">
            <SearchButton />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <ResultCards />
          </div>
          <div className="col-md-4">
            <MostSearchedItems />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <ResultCards />
          </div>
          <div className="col-md-4">
            <MostSearchedItems />
          </div>
        </div>
      </div>
      <div className="container-fluid">
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

import { React, useState } from 'react';

// components
import ResultsWindow from '../ResultsWindow/ResultsWindow';
import SearchBar from '../SearchBar/SearchBar';
import MostSearchedItems from '../MostSearchedItems/MostSearchedItems';
import SearchButton from '../SearchButton/SearchButton';

import './main.scss';

function Main() {
  const [searchResults, setSearchResults] = useState('empty');
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  function searchForResults() {
    console.log('searchResults');

    // This function should make a call to API and get back Barbora e-shop results

    console.log(searchValue);
  }

  return (
    <div className="default-div rounded py-2 m-3 default-text">
      <div className="container-fluid pb-2">
        <div className="row">
          <div className="col-8 col-sm-10 col-md-10">
            <SearchBar handleInputChange={handleInputChange} />
          </div>
          <div className="col-4 col-sm-2 col-md-2">
            <SearchButton
              onClickFunction={searchForResults}
              btnTitle={'Search'}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <ResultsWindow />
          </div>
          <div className="col-md-4">
            <MostSearchedItems searchResults={searchResults} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

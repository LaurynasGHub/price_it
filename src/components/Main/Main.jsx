import { React, useState } from 'react';

// components
import ResultsWindow from '../ResultsWindow/ResultsWindow';
import SearchBar from '../SearchBar/SearchBar';
import MostSearchedItems from '../MostSearchedItems/MostSearchedItems';
import SearchButton from '../SearchButton/SearchButton';

import { cfg } from '../../cfg/cfg';

import './main.scss';

function Main() {
  const [searchResults, setSearchResults] = useState('empty');
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  async function searchForBarboraResults() {
    console.log('searchResults');

    console.log(searchValue);

    const response = await fetch(
      `${cfg.API.HOST}/scrapers/barbora?searchTerm=${searchValue}`,
      {
        method: 'GET',
      }
    );

    const barboraRes = await response.json();

    console.log('barbroaRes \n', barboraRes);
    return barboraRes;
  }

  async function searchForRimiResults() {
    console.log('searchResults');

    console.log(searchValue);

    const response = await fetch(
      `${cfg.API.HOST}/scrapers/rimi?searchTerm=${searchValue}`,
      {
        method: 'GET',
      }
    );

    const rimiRes = await response.json();

    console.log('rimiRes \n', rimiRes);

    return rimiRes;
  }

  async function getSearchResults() {}

  return (
    <div className="container-fluid pb-2">
      <div className="row">
        <div className="col-8 col-sm-10 col-md-10">
          <SearchBar handleInputChange={handleInputChange} />
        </div>
        <div className="col-4 col-sm-2 col-md-2">
          <SearchButton onClickFunction={getSearchResults} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-8">
          <ResultsWindow />
        </div>
        <div className="col-md-4">
          <MostSearchedItems searchResults={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default Main;

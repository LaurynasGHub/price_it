import { React, useState } from 'react';

// components
import SearchBar from '../SearchBar/SearchBar';
import MostSearchedItems from '../MostSearchedItems/MostSearchedItems';
import CostOfMainItemsCart from '../CostOfMainItemsCart/CostOfMainItemsCart';
import SearchButton from '../SearchButton/SearchButton';
import ResultCard from '../ResultCard/ResultCard';

import { cfg } from '../../cfg/cfg';

import './main.scss';

function Main() {
  const [searchResults, setSearchResults] = useState('empty');
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

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

  async function getSearchResults() {
    const barboraResult = await searchForBarboraResults();

    console.log(barboraResult.products);

    setSearchResults(barboraResult.products);
  }

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
          <div className="default-div rounded p-3 mt-2 default-text">
            {searchResults === 'empty' || !searchResults ? (
              <div className="h-100 d-flex align-items-center justify-content-center">
                {loading ? (
                  <div className="loader">...</div>
                ) : (
                  <p className="custom-border-bottom p-2">No results yet</p>
                )}
              </div>
            ) : Array.isArray(searchResults) && searchResults.length > 0 ? (
              searchResults.map((item) => (
                <ResultCard
                  key={`${item.name}${item.price}`}
                  title={item.name}
                  price={item.price}
                />
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <MostSearchedItems searchResults={searchResults} />
          <CostOfMainItemsCart />
        </div>
      </div>
    </div>
  );
}

export default Main;

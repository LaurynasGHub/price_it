import { React, useState } from 'react';

// components
import SearchBar from '../SearchBar/SearchBar';
import MostSearchedItems from '../MostSearchedItems/MostSearchedItems';
import CostOfMainItemsCart from '../CostOfMainItemsCart/CostOfMainItemsCart';
import SearchButton from '../SearchButton/SearchButton';
import ResultCard from '../ResultCard/ResultCard';
import ResultCards from '../ResultCards/ResultCards';

import { cfg } from '../../cfg/cfg';

import './main.scss';

function Main() {
  const [searchResults, setSearchResults] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  async function getScraperResults() {
    setLoading(true);

    const response = await fetch(
      `${cfg.API.HOST}/scrapers/results?searchTerm=${searchValue}`,
      {
        method: 'GET',
      }
    );

    const result = await response.json();
    console.log('Fetched data:', result);

    return result;
  }

  async function getSearchResults() {
    const fetchResult = await getScraperResults();

    console.log('Fetch result:\n', fetchResult);

    //
    // Gives empty result
    //
    // console.log('===\n', searchResults);
    console.log('===');
    console.log(fetchResult);

    console.log('===');
    console.log(fetchResult.barbora);

    console.log('===');
    console.log(fetchResult.barbora.products.length);

    setSearchResults(fetchResult);

    setLoading(false);
    // console.log('===\n', searchResults.barbora.products);
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
          <div className="default-div mt-2 default-text">
            {!searchResults ? (
              <div className="h-100 d-flex align-items-center justify-content-center">
                {loading ? (
                  <div className="loader">...</div>
                ) : (
                  <p className="custom-border-bottom p-2">No results yet</p>
                )}
              </div>
            ) : searchResults.barbora?.products.length > 0 ? (
              <div className="rounded default-div custom-border p-2 small">
                <ResultCards searchResults={searchResults.barbora.products} />
                <ResultCards searchResults={searchResults.rimi.products} />
              </div>
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

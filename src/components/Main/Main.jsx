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
    setLoading(true);

    const fetchResult = await getScraperResults();

    setSearchResults(fetchResult);

    setLoading(false);
  }

  return (
    <div className="container-fluid pb-2">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 default-div default-text">
          <p className="info-text">
            Welcome to Price It! Enter a search term for which you would like to
            know the price. Search term <u>has to be in lithuanian</u>. If you
            would like more specific results enter more search terms. I.e.:
            duona Toste.
          </p>
        </div>
      </div>
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
            ) : searchResults.barbora?.products.length > 0 ||
              searchResults.rimi?.products.length > 0 ? (
              <div className="default-div small">
                {loading ? (
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="loader pb-3">...</div>
                  </div>
                ) : (
                  <div className="default-div small">
                    <ResultCards
                      searchResults={searchResults.barbora.products}
                      shop={'maxima'}
                    />
                    <ResultCards
                      searchResults={searchResults.rimi.products}
                      shop={'rimi'}
                    />
                  </div>
                )}
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

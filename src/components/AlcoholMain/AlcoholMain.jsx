import { React, useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

// components
import SearchBar from '../SearchBar/SearchBar';
import MostSearchedItems from '../MostSearchedItems/MostSearchedItems';
import CostOfMainItemsCart from '../CostOfMainItemsCart/CostOfMainItemsCart';
import SearchButton from '../SearchButton/SearchButton';
import ResultCards from '../ResultCards/ResultCards';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import { cfg } from '../../cfg/cfg';

function AlcoholMain() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //   const { searchData, setSearchData } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('No results yet');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  async function getScraperResults() {
    if (searchValue === '') {
      setErrorMessage('Please provide something to search');
      return;
    }

    try {
      const response = await fetch(
        `${cfg.API.HOST}/scrapers/shops/alcohol/results?searchTerm=${searchValue}`,
        {
          method: 'GET',
        }
      );

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
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
            Welcome to alcohol prices search. Here you can find alcohol prices
            from different shops - Vynoteka etc.
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
                  <div className="loader pb-3">...</div>
                ) : (
                  <p className="custom-border-bottom p-2">{errorMessage}</p>
                )}
              </div>
            ) : searchResults.vynoteka?.products.length > 0 ? (
              <div className="default-div small">
                {loading ? (
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="loader pb-3">...</div>
                  </div>
                ) : (
                  <div className="default-div small">
                    <ResultCards
                      searchResults={searchResults.vynoteka.products}
                      shop={'vynoteka'}
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="h-100 d-flex align-items-center justify-content-center">
                {loading ? (
                  <div className="loader">...</div>
                ) : (
                  <p className="custom-border-bottom p-2">No results yet</p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <MostSearchedItems />
          <CostOfMainItemsCart />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default AlcoholMain;

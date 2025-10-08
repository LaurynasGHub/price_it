import { useState, useEffect, useRef } from 'react';

import SearchButton from '../SearchButton/SearchButton';
import ResultCards from '../ResultCards/ResultCards';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import { cfg } from '../../cfg/cfg';

function AlcoholMain() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('No results yet');
  const [alcoholResults, setAlcoholResults] = useState(() => {
    const storedResults = sessionStorage.getItem('alcoholResults');
    return storedResults ? JSON.parse(storedResults) : null;
  });

  const searchValue = useRef('');

  useEffect(() => {
    if (alcoholResults) {
      sessionStorage.setItem('alcoholResults', JSON.stringify(alcoholResults));
    }
  }, [alcoholResults]);

  async function getScraperResults() {
    const value = searchValue.current?.value?.trim() || '';

    if (value === '') {
      setErrorMessage('Please provide something to search');
      setAlcoholResults(null);
      return null;
    }

    try {
      const response = await fetch(
        `${cfg.API.HOST}/scrapers/shops/alcohol/results?searchTerm=${value}`,
        { method: 'GET' }
      );

      const result = await response.json();
      return result;
    } catch (error) {
      console.log(`Error: ${error.message}`);
      setErrorMessage('Error fetching data');
      return null;
    }
  }

  async function getSearchResults() {
    setLoading(true);
    setErrorMessage('');

    const fetchResult = await getScraperResults();

    if (fetchResult === null) {
      setLoading(false);
      return;
    }

    const hasResults = fetchResult?.vynoteka?.products?.length > 0;

    if (hasResults) {
      setAlcoholResults(fetchResult);
    } else {
      setAlcoholResults(null);
      setErrorMessage('No results found');
    }

    setLoading(false);
  }

  return (
    <div className="container-fluid pb-2">
      <div className="row">
        <div className="col-8 col-sm-10 col-md-10">
          <input
            className="default-div custom-border rounded p-2 default-text w-100"
            placeholder="enter product name"
            ref={searchValue}
          />
        </div>
        <div className="col-4 col-sm-2 col-md-2">
          <SearchButton onClickFunction={getSearchResults} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-8 default-div mt-2 default-text">
          {loading ? (
            <div className="h-100 d-flex align-items-center justify-content-center">
              <div className="loader pb-3">...</div>
            </div>
          ) : alcoholResults ? (
            <div className="default-div small">
              <ResultCards
                searchResults={alcoholResults.vynoteka?.products}
                shop="vynoteka"
              />
            </div>
          ) : (
            <div className="h-100 d-flex align-items-center justify-content-center">
              <p className="custom-border-bottom p-2">{errorMessage}</p>
            </div>
          )}
        </div>
        <div className="col-md-4">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default AlcoholMain;

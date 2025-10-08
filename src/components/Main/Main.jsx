import { useState, useEffect, useRef } from 'react';

// components
import SearchButton from '../SearchButton/SearchButton';
import ResultCards from '../ResultCards/ResultCards';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import AdvertisementBanner from '../AdvertisementBanner/AdvertisementBanner';

import { cfg } from '../../cfg/cfg';

function Main() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('No results yet');
  const [searchResults, setSearchResults] = useState(() => {
    const storedResults = sessionStorage.getItem('searchResults');
    return storedResults ? JSON.parse(storedResults) : null;
  });

  const searchValue = useRef('');

  useEffect(() => {
    if (searchResults) {
      sessionStorage.setItem('searchResults', JSON.stringify(searchResults));
    }
  }, [searchResults]);

  async function getScraperResults() {
    const value = searchValue.current?.value?.trim() || '';

    if (value === '') {
      setErrorMessage('Please provide something to search');
      setSearchResults(null);
      return null;
    }

    try {
      const response = await fetch(
        `${cfg.API.HOST}/scrapers/shops/results?searchTerm=${value}`,
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

    const hasResults =
      fetchResult?.barbora?.products?.length > 0 ||
      fetchResult?.rimi?.products?.length > 0 ||
      fetchResult?.lastMile?.products?.length > 0;

    if (hasResults) {
      setSearchResults(fetchResult);
    } else {
      setSearchResults(null);
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
          ) : searchResults ? (
            <div className="default-div small">
              <ResultCards
                searchResults={searchResults.barbora?.products}
                shop="maxima"
              />
              <ResultCards
                searchResults={searchResults.rimi?.products}
                shop="rimi"
              />
              <ResultCards
                searchResults={searchResults.lastMile?.products}
                shop="iki"
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

export default Main;

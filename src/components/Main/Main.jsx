import { useState, useEffect, useRef, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

// components
import SearchButton from '../SearchButton/SearchButton';
import ResultCards from '../ResultCards/ResultCards';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ShopsSelection from '../ShopsSelection/ShopsSelection';

import { cfg } from '../../cfg/cfg';

function Main() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('No results yet');
  const { selectedShopData } = useContext(AppContext);
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
      if (selectedShopData.length === 0) {
        setSearchResults(null);
        setErrorMessage('Please select at least one shop');
        return null;
      }

      const searchShops = selectedShopData
        .map((shop) => shop.toLowerCase())
        .join(',');

      const response = await fetch(
        `${cfg.API.HOST}/scrapers/shops/v2/results?searchTerm=${value}&shops=${searchShops}`,
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
      fetchResult &&
      Object.values(fetchResult).some(
        (shop) => Array.isArray(shop?.products) && shop.products.length > 0
      );

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
      {/* first row - navbar, search bar */}
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

      {/* second row - shop selector */}
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <ShopsSelection />
        </div>
      </div>

      {/* third row, result cards */}
      <div className="row mt-2">
        <div className="d-none d-md-block col-md-2"></div>
        <div className="col-md-5 default-div mt-2 default-text">
          {loading ? (
            <div className="h-100 d-flex align-items-center justify-content-center">
              <div className="loader pb-3">...</div>
            </div>
          ) : searchResults ? (
            <div className="default-div small">
              {Object.entries(searchResults ?? {}).map(
                ([shopKey, shopData]) => (
                  <ResultCards
                    key={shopKey}
                    searchResults={shopData?.products || []}
                    shop={shopKey}
                  />
                )
              )}
            </div>
          ) : (
            <div className="h-100 d-flex align-items-center justify-content-center">
              <p className="custom-border-bottom p-2">{errorMessage}</p>
            </div>
          )}
        </div>

        <div className="col-md-3">
          <ShoppingCart />
        </div>
        <div className="d-none d-md-block col-md-2"></div>
      </div>
    </div>
  );
}

export default Main;

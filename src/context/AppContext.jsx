import { createContext, useEffect, useState } from 'react';
import { cfg } from '../cfg/cfg';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [searchData, setSearchData] = useState([]);
  const [mainCartData, setMainCartData] = useState([]);
  const [mainCartPrices, setMainCartPrices] = useState([]);

  const fetchSearchData = async () => {
    try {
      const response = await fetch(`${cfg.API.HOST}/topSearches/results`);

      const data = await response.json();

      setSearchData(data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const getMainCartData = async () => {
    try {
      const response = await fetch(
        `${cfg.API.HOST}/mainItems/products/results`
      );

      const data = await response.json();

      setMainCartData(data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const getMainCartPrices = async () => {
    try {
      const response = await fetch(`${cfg.API.HOST}/mainItems/cart/results`);

      const data = await response.json();

      setMainCartPrices(data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  //   when page mounts gathers data from backend
  useEffect(() => {
    fetchSearchData();
    getMainCartData();
    getMainCartPrices();
  }, []);

  return (
    <AppContext.Provider
      value={{
        searchData,
        setSearchData,
        mainCartData,
        setMainCartData,
        mainCartPrices,
        setMainCartPrices,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

import { createContext, useEffect, useState } from 'react';
import { cfg } from '../cfg/cfg';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [searchData, setSearchData] = useState([]);
  const [mainCartData, setMainCartData] = useState([]);
  const [mainCartPrices, setMainCartPrices] = useState([]);
  const [userID, setUserID] = useState(localStorage.getItem('userID') || '');

  const storedCartData = localStorage.getItem('cartData');
  const initialCartData = localStorage.getItem('cartData')
    ? JSON.parse(storedCartData)
    : [];

  const [cartData, setCartData] = useState(initialCartData);

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
      const response = await fetch(
        `${cfg.API.HOST}/mainItems/cart/results?id=${userID}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setMainCartPrices(data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const handleAddToCart = (item) => {
    setCartData((prevCartData) => [...prevCartData, item]);
  };

  const handleRemoveFromCart = (item) => {
    const filteredCardData = cartData.filter(
      (dataItem) => dataItem.name !== item.name
    );

    setCartData(filteredCardData);
  };

  const handleClearCart = () => {
    setCartData(() => []);
  };
  //   when page mounts gathers data from backend
  useEffect(() => {
    fetchSearchData();
    getMainCartData();
    getMainCartPrices();
  }, []);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  useEffect(() => {
    getMainCartPrices();
  }, [userID]);

  useEffect(() => {
    if (userID) {
      localStorage.setItem('userID', userID);
      localStorage.setItem('loggedIn', 'true');
    } else {
      localStorage.removeItem('userID');
      localStorage.removeItem('loggedIn');
    }
  }, [userID]);

  return (
    <AppContext.Provider
      value={{
        searchData,
        setSearchData,
        mainCartData,
        setMainCartData,
        mainCartPrices,
        setMainCartPrices,
        cartData,
        setCartData,
        userID,
        setUserID,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

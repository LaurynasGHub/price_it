import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

function AppContextProvider({ children }) {
  // cart data handling
  const [cartData, setCartData] = useState(() => {
    const stored = localStorage.getItem('cartData');
    return stored ? JSON.parse(stored) : [];
  });

  const handleAddToCart = (item) => {
    setCartData((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCartData((prev) => prev.filter((dataItem) => dataItem.id !== item.id));
  };

  const handleClearCart = () => {
    setCartData([]);
  };

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  // shop selection handling
  const [selectedShopData, setSelectedShopList] = useState(() => {
    const stored = localStorage.getItem('selectedShopData');
    return stored ? JSON.parse(stored) : [];
  });

  function handleShopSelection(item) {
    setSelectedShopList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  }

  useEffect(() => {
    localStorage.setItem('selectedShopData', JSON.stringify(selectedShopData));
  }, [selectedShopData]);

  return (
    <AppContext.Provider
      value={{
        cartData,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        selectedShopData,
        handleShopSelection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

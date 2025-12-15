import { createContext, useState } from 'react';

export const AppContext = createContext();

function AppContextProvider(props) {
  // >>>BREAK<<<
  // shopping cart handlers
  const storedCartData = localStorage.getItem('cartData');
  const initialCartData = localStorage.getItem('cartData')
    ? JSON.parse(storedCartData)
    : [];
  const [cartData, setCartData] = useState(initialCartData);

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

  // >>>BREAK<<<
  // shop selection handler
  const storedSelectedShopData = localStorage.getItem('selectedShopData');
  const initialSelectedShopData = localStorage.getItem('selectedShopData')
    ? JSON.parse(storedSelectedShopData)
    : [];
  const [selectedShopList, setSelectedShopList] = useState(
    initialSelectedShopData
  );

  function handleShopSelection(item) {
    setSelectedShopList(
      (prev) =>
        prev.includes(item)
          ? prev.filter((i) => i !== item) // remove
          : [...prev, item] // add
    );
  }

  return (
    <AppContext.Provider
      value={{
        cartData,
        setCartData,
        handleAddToCart,
        handleRemoveFromCart,
        handleClearCart,
        selectedShopList,
        handleShopSelection,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

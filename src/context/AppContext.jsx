import { createContext, useState } from 'react';

export const AppContext = createContext();

function AppContextProvider(props) {
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

  return (
    <AppContext.Provider
      value={{
        cartData,
        setCartData,
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

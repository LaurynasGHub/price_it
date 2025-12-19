import { createContext } from 'react';
import { useCart } from '../hooks/useCart';
import { useShopSelection } from '../hooks/useShopSelection';

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const cart = useCart();
  const shopSelection = useShopSelection();

  return (
    <AppContext.Provider
      value={{
        ...cart,
        ...shopSelection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

import { createContext } from 'react';
import { useCart } from '../hooks/useCart';
import { useShopSelection } from '../hooks/useShopSelection';
import { useIsMobile } from '../hooks/useIsMobile';

export const AppContext = createContext(null);

function AppContextProvider({ children }) {
  const cart = useCart();
  const shopSelection = useShopSelection();

  return (
    <AppContext.Provider
      value={{
        ...cart,
        ...shopSelection,
        useIsMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

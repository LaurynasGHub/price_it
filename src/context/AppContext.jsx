import { createContext, useEffect, useState } from 'react';
import { cfg } from '../cfg/cfg';

export const AppContext = createContext();

function AppContextProvider(props) {
  const [searchData, setSearchData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${cfg.API.HOST}/topSearches/results`);

      const data = await response.json();

      setSearchData(data);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  //   when page mounts gathers data from backend
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ searchData, setSearchData }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;

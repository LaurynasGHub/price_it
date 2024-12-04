import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function MostSearchedItems() {
  const { searchData, setSearchData } = useContext(AppContext);
  const [isMobile, setIsMobile] = useState(false);
  const [loaderError, setLoaderError] = useState(false);

  useEffect(() => {
    //if window size is below 600px gives true
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    handleResize();
    // Remove event listener- prevents memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const emptyDataListener = () => {
    if (searchData.length < 1) {
      setLoaderError(true);
      // setLoaderErrorText('Server may be offline');
    }
  };

  useEffect(() => {
    emptyDataListener();
  }, [searchData]);

  return (
    <div
      className={
        isMobile
          ? 'default-div custom-border rounded p-3 my-1 default-text'
          : 'default-div custom-border rounded p-3 my-3 default-text'
      }
    >
      <h5>Server may be offline</h5>
    </div>
  );
}

export default MostSearchedItems;

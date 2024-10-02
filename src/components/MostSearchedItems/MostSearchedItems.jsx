import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function MostSearchedItems() {
  const { searchData, setSearchData } = useContext(AppContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    //if window size is below 600px gives true
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    handleResize();
    // Remove event listener- prevents memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={
        isMobile
          ? 'default-div custom-border rounded p-3 my-1 default-text'
          : 'default-div custom-border rounded p-3 my-3 default-text'
      }
    >
      <h5>Most popular searches:</h5>
      <li>1. Duona</li>
      <li>2. Pienas</li>
      <li>3. Ledai</li>
      <li>4. Sūris</li>
      <li>5. Agurkai</li>
      {searchData.map((item) => (
        <li key={item.searchTerm}>{item.searchTerm}</li>
      ))}
    </div>
  );
}

export default MostSearchedItems;

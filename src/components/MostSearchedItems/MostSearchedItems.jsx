// This item, so far, is not used anywhere
// for the purpose of it being here, the element is not deleted
// so - if it is needed in the future - it could be reused

import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';

function MostSearchedItems() {
  const { searchData, setSearchData } = useContext(AppContext);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div
      className={
        isMobile
          ? 'default-div custom-border rounded p-3 my-1 default-text'
          : 'default-div custom-border rounded p-3 my-3 default-text'
      }
    >
      <div className="d-flex">
        <h5>Most popular searches</h5>
        <FontAwesomeIcon className="ms-2 mt-1" icon={faFire} />
      </div>
      {searchData.length < 1 ? (
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="loader">...</div>
        </div>
      ) : (
        searchData.map((item) => (
          <li key={item.searchTerm}>{item.searchTerm}</li>
        ))
      )}
    </div>
  );
}

export default MostSearchedItems;

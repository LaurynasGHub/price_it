import { useState, useEffect } from 'react';

import './navbar.scss';

function Navbar() {
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
    <div className="default-div p-4 navbar">
      {isMobile ? (
        <img
          src="/images/Price_it_logo.png"
          alt="price_it_logo"
          width="10%"
          height="10%"
          className="rounded"
        ></img>
      ) : (
        <h2 className="default-text navbar-title mb-0">Price It</h2>
      )}

      {/* <div className="navbar-items">
        <NavLink
          to="/search_tool"
          className={'underline-button non-styled-item default-text p-2 me-4'}
        >
          {isMobile ? '' : 'Shops'}
          <FontAwesomeIcon
            className={isMobile ? '' : 'ms-2'}
            icon={faBasketShopping}
          />
        </NavLink>
        <NavLink
          to="/alcohol_search_tool"
          className={'underline-button non-styled-item default-text p-2 me-4'}
        >
          {isMobile ? '' : 'Alcohol'}
          <FontAwesomeIcon
            className={isMobile ? '' : 'ms-2'}
            icon={faMartiniGlassCitrus}
          />
        </NavLink>
        <Toggler isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div> */}
    </div>
  );
}

export default Navbar;

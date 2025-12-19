import { useContext } from 'react';
import useLocalStorage from 'use-local-storage';

// components
import Toggler from '../Toggler/Toggler';

import './navbar.scss';

import { AppContext } from '../../context/AppContext';

function Navbar() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);
  const { useIsMobile } = useContext(AppContext);
  const isMobile = useIsMobile();

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

      <div className="navbar-items">
        {/* <NavLink
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
        <NavLink
          to="/profile"
          className={'underline-button non-styled-item default-text p-2 me-4'}
        >
          {isMobile ? '' : 'Profile'}
          <FontAwesomeIcon className={isMobile ? '' : 'ms-2'} icon={faUser} />
        </NavLink> */}
        {/* To do */}
        {/* add navigation to about tab */}
        <Toggler isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>
    </div>
  );
}

export default Navbar;

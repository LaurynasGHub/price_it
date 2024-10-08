import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// components
import Toggler from '../Toggler/Toggler';

import './navbar.scss';

function Navbar() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

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
      <h2 className="default-text navbar-title mb-0">Price it</h2>
      <NavLink
        to="/profile"
        className={'underline-button non-styled-item default-text'}
      >
        {isMobile ? '' : 'Profile'}
        <FontAwesomeIcon className="ps-2" icon={faUser} />
      </NavLink>

      <NavLink
        to="/search_tool"
        className={'underline-button non-styled-item default-text'}
      >
        {isMobile ? '' : 'Search'}
        <FontAwesomeIcon className="ps-2" icon={faMagnifyingGlass} />
      </NavLink>
      <Toggler isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
}

export default Navbar;

import React from 'react';
import useLocalStorage from 'use-local-storage';
import { NavLink } from 'react-router-dom';

// components
import Toggler from '../Toggler/Toggler';

import './navbar.scss';

function Navbar() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <div className="default-div p-4 navbar">
      <h2 className="default-text navbar-title mb-0">Price it</h2>
      <NavLink
        to="/info"
        className={'underline-button non-styled-item default-text'}
      >
        Info
      </NavLink>
      <NavLink
        to="/main"
        className={'underline-button non-styled-item default-text'}
      >
        Main
      </NavLink>
      <Toggler isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
}

export default Navbar;

import React from 'react';
import useLocalStorage from 'use-local-storage';

// components
import Toggler from '../Toggler/Toggler';

import './navbar.scss';

function Navbar() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useLocalStorage('isDark', preference);

  return (
    <div className="default-div p-4 navbar">
      <h2 className="default-text navbar-title mb-0">Price it</h2>
      {/* add popovers here */}
      <Toggler isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
}

export default Navbar;

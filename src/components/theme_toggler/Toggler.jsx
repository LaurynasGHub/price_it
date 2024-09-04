import React from 'react';

import './toggler.scss';

function Toggler({ handleChange, isChecked }) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">
        {/* TODO
        change "dark mode to icons as sun and moon"
         */}
        <h5>dark mode</h5>
      </label>
    </div>
  );
}

export default Toggler;

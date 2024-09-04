import React from 'react';

import './toggler.scss';

function Toggler({ handleChange, isChecked }) {
  return (
    <div>
      <div class="form-check form-switch default-div">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onChange={handleChange}
          checked={isChecked}
        ></input>
        <label class="default-title" for="flexSwitchCheckDefault">
          Toggle theme
        </label>
      </div>
    </div>
  );
}

export default Toggler;

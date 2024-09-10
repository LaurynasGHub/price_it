import React from 'react';

import './searchBar.scss';

function SearchBar({ inputValue, handleInputChange }) {
  return (
    <div className="search-bar">
      <input
        className="default-div custom-border rounded p-2 default-text w-100"
        placeholder="enter product name"
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
}

export default SearchBar;

import React from 'react';

function SearchButton({ onClickFunction }) {
  return (
    <button
      className="p-2 w-100 non-styled-item underline-button default-text"
      onClick={onClickFunction}
    >
      Search
    </button>
  );
}

export default SearchButton;

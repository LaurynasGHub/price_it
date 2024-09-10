import React from 'react';

function SearchButton({ onClickFunction, btnTitle }) {
  return (
    <button
      className="p-2 w-100 non-styled-item underline-button default-text"
      onClick={onClickFunction}
    >
      {btnTitle}
    </button>
  );
}

export default SearchButton;

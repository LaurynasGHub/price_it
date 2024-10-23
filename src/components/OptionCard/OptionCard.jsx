import React from 'react';

function OptionCard({ option }) {
  return (
    <div className="default-div default-text">
      <p>{option}</p>
      <button className="non-styled-item underline-button p-2 m-2">
        Add option
      </button>
    </div>
  );
}

export default OptionCard;

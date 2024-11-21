import React from 'react';

function OptionCard({ options }) {
  return (
    <div className="default-div default-text option-card d-flex">
      {options.map((item) => (
        <p className="custom-border-bottom me-2 p-1">{item}</p>
      ))}
    </div>
  );
}

export default OptionCard;

import React from 'react';

function OptionCards({ options }) {
  return (
    <div className="default-div default-text option-card d-flex custom-border rounded p-2">
      {options.map((item) => (
        <p className="custom-border-bottom me-2 p-1" key={item}>
          {item}
        </p>
      ))}
    </div>
  );
}

export default OptionCards;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function OptionCards({ options, deleteOptionFunction }) {
  return (
    <div className="default-div default-text option-card d-flex custom-border rounded p-2 flex-wrap">
      {options.map((item) => (
        <div className="d-inline-flex align-items-center me-2" key={item}>
          <p className="custom-border-bottom p-1 mb-0 mr-0">{item}</p>
          <button
            className="non-styled-item underline-button default-div default-text"
            onClick={() => deleteOptionFunction(item)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default OptionCards;

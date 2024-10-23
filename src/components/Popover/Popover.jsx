import { useState } from 'react';

function Popover({ buttonText, text }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="non-styled-item default-text underline-button"
      >
        {buttonText}
      </button>
      {showPopup ? <p className="info-text">{text}</p> : null}
    </div>
  );
}

export default Popover;

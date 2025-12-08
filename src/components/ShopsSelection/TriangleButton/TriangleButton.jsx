import { useState } from 'react';
import './triangleButton.scss';

function TriangleButton({ onToggle }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    const newState = !open;
    setOpen(newState);

    // send the new value to parent
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <button
      className={`default-text triangle-button ps-1 ${open ? 'rotated' : ''}`}
      onClick={handleClick}
    >
      Shop selection
      <span className="triangle ms-1" />
    </button>
  );
}

export default TriangleButton;

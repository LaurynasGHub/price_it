import { useState } from 'react';

import './shopSelectButton.scss';

function ShopSelectButton({ shopName }) {
  const [selected, selectToggler] = useState(false);
  return (
    <div>
      <button
        className={`shop-button-default default-div default-text rounded my-2 py-2 ${
          selected ? 'selected-button ' : ''
        }`}
        onClick={() => selectToggler(!selected)}
      >
        {shopName}
      </button>
    </div>
  );
}

export default ShopSelectButton;

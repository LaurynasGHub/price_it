import { useState, useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

import './shopSelectButton.scss';

function ShopSelectButton({ shopName }) {
  const [selected, selectToggler] = useState(false);
  const { handleShopSelection } = useContext(AppContext);

  function handleClick() {
    selectToggler(!selected);

    handleShopSelection(shopName);
  }

  return (
    <div>
      <button
        className={`shop-button-default default-div default-text rounded my-2 py-2 ${
          selected ? 'selected-button ' : ''
        }`}
        onClick={() => handleClick()}
      >
        {shopName}
      </button>
    </div>
  );
}

export default ShopSelectButton;

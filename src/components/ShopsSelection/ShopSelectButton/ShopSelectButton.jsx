import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

import './shopSelectButton.scss';

function ShopSelectButton({ shopName }) {
  const { handleShopSelection, selectedShopData } = useContext(AppContext);

  const selected = selectedShopData.includes(shopName);

  function handleClick() {
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

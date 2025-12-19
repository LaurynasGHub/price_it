import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';

import './shopSelectButton.scss';

function ShopSelectButton({ shopName }) {
  const { selectedShopData, toggleShop } = useContext(AppContext);

  const selected = selectedShopData.includes(shopName);

  return (
    <div>
      <button
        className={`shop-button-default default-div default-text rounded my-2 py-2 ${
          selected ? 'selected-button ' : ''
        }`}
        onClick={() => toggleShop(shopName)}
      >
        {shopName}
      </button>
    </div>
  );
}

export default ShopSelectButton;

import { useState } from 'react';

// components
import ShopSelectButton from '../ShopsSelection/ShopSelectButton/ShopSelectButton';
import TriangleButton from './TriangleButton/TriangleButton';

// shop list
import shopList from '../../utils/shopList.json';

function ShopsSelection() {
  const [selectionOpen, setSelectionOpen] = useState(false);

  // how to add shop to selection
  // setShopList (...shopList, newShop)
  // something like the line above

  function shopSelection() {
    setSelectionOpen(!selectionOpen);
  }

  return (
    <div className="default-div default-text p-2 my-2 custom-border rounded d-flex flex-column flex-wrap">
      <div>
        <TriangleButton onToggle={() => shopSelection()} />
      </div>
      <div style={{ display: selectionOpen ? 'block' : 'none' }}>
        <div>
          <p className="mb-0 m-1">Groceries</p>
          <div className="default-div default-text d-flex flex-row flex-wrap gap-2">
            {shopList.shops.groceries.map((shop) => (
              <ShopSelectButton shopName={shop.name} key={shop.id} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-0 m-1">Alcohol</p>
          <div className="default-div default-text d-flex flex-row flex-wrap gap-2">
            {shopList.shops.alcohol.map((shop) => (
              <ShopSelectButton shopName={shop.name} key={shop.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopsSelection;

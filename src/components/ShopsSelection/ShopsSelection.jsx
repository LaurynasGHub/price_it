import { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';

// components
import ShopSelectButton from '../ShopsSelection/ShopSelectButton/ShopSelectButton';
import TriangleButton from './TriangleButton/TriangleButton';

// shop list
import shopList from '../../utils/shopList.json';

function ShopsSelection() {
  const [selectionOpen, setSelectionOpen] = useState(false);
  const { selectedShopList } = useContext(AppContext);

  function shopSelection(shopName) {
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
        <div className="mb-0 m-1">
          {selectedShopList.length === 0 ? (
            <p>No shops selected</p>
          ) : (
            <div>
              <p>Selected shops</p>
              {selectedShopList.map((shop) => (
                <p key={shop}>{shop}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopsSelection;

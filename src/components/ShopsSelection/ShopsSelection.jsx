import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';

// components
import ShopSelectButton from '../ShopsSelection/ShopSelectButton/ShopSelectButton';
import TriangleButton from './TriangleButton/TriangleButton';

// shop list
import shopList from '../../utils/shopList.json';

function ShopsSelection() {
  const { selectedShopData } = useContext(AppContext);

  const [storeOpened, setOpened] = useState(() => {
    const storedOpened = sessionStorage.getItem('storeOpened');
    return storedOpened ? JSON.parse(storedOpened) : null;
  });

  function shopSelection() {
    setOpened(!storeOpened);
  }

  useEffect(() => {
    sessionStorage.setItem('storeOpened', JSON.stringify(storeOpened));
  }, [storeOpened]);

  return (
    <div className="default-div default-text p-2 my-3 custom-border rounded d-flex flex-column flex-wrap">
      <div>
        <TriangleButton onToggle={() => shopSelection()} />
      </div>
      <div style={{ display: storeOpened ? 'block' : 'none' }}>
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
          {selectedShopData.length === 0 ? (
            <p>No shops selected</p>
          ) : (
            <div className="d-flex flex-row">
              <p className="me-1">Selected shops -</p>
              {selectedShopData.map((shop, index) => (
                <p className="me-1" key={shop}>
                  {shop}
                  {index < selectedShopData.length - 1 && ','}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopsSelection;

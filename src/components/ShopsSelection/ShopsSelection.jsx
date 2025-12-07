// components
import ShopSelectButton from '../ShopsSelection/ShopSelectButton/ShopSelectButton';

// shop list
import shops from '../../utils/shopList.json';

function ShopsSelection() {
  return (
    <div
      className="default-div default-text p-2 
    custom-border rounded mt-2 d-flex flex-row flex-wrap gap-2"
    >
      {shops.map((shop) => (
        <ShopSelectButton shopName={shop.name} />
      ))}
    </div>
  );
}

export default ShopsSelection;

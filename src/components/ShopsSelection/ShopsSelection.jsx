// components
import ShopSelectButton from '../ShopsSelection/ShopSelectButton/ShopSelectButton';

// shop list
import shops from '../../utils/shopList.json';

function ShopsSelection() {
  return (
    <div
      className="default-div default-text p-2 my-2
    custom-border rounded d-flex flex-column flex-wrap"
    >
      <div>
        <p className="mb-0 m-1">Groceries</p>
        <div
          className="default-div default-text
         d-flex flex-row flex-wrap gap-2"
        >
          {shops.shops.groceries.map((shop) => (
            <ShopSelectButton shopName={shop.name} />
          ))}
        </div>
      </div>
      <div>
        <p className="mb-0 m-1">Alcohol</p>
        <div
          className="default-div default-text
         d-flex flex-row flex-wrap gap-2"
        >
          {shops.shops.alcohol.map((shop) => (
            <ShopSelectButton shopName={shop.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopsSelection;

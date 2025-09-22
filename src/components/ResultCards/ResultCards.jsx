import React from 'react';

// components
import ResultCard from '../ResultCard/ResultCard';

function ResultCards({ searchResults, shop }) {
  function shopImgSwitch(shop) {
    let imgPath;

    switch (shop) {
      case 'rimi':
        imgPath = '/images/RIMI.png';
        break;

      case 'maxima':
        imgPath = '/images/barbora_cover.jpeg';
        break;

      case 'iki':
        imgPath = '/images/IKI_logo.png';
        break;

      case 'vynoteka':
        imgPath = '/images/vynoteka_logo.png';
        break;

      default:
        break;
    }

    return imgPath;
  }

  return (
    <div className="custom-border rounded p-2 my-3">
      <div className="row">
        <div className="col-4 col-sm-2 col-md-2 ps-4 p-2">
          <img
            className="img-fluid rounded"
            src={shopImgSwitch(shop)}
            alt="shop-img"
          ></img>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-sm-8 col-md-8">
          <p className="mb-2 ms-2">
            <u>Name</u>
          </p>
        </div>
        <div className="col-2 col-sm-2 col-md-2 price-p">
          <p>
            <u>Price</u>
          </p>
        </div>
      </div>
      {searchResults.length > 0 ? (
        searchResults.map((item, index) => (
          <div key={`${item.name}-${index}`}>
            <ResultCard
              title={item.name}
              price={item.price}
              product={{
                name: item.name,
                price: item.price,
                shop: shop,
              }}
            />
          </div>
        ))
      ) : (
        <p className="p-2">
          No products found, check your search terms or try to redefine it.
        </p>
      )}
    </div>
  );
}

export default ResultCards;
